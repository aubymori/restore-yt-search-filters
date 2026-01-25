const protos = require("./generated/protos");
const Translations = require("./translations");
const Settings = require("./settings");
const SettingsMenu = require("./settings_menu");
const Base64Url = require("./base64url");
const SearchParams = protos.youtube.api.innertube.SearchParams;

Settings.init();
SettingsMenu.init();

/* The settings menu is a bit broken without this :/ */
document.addEventListener("DOMContentLoaded", function()
{
    let style = document.createElement("style");
    style.textContent = 
`#sections.ytd-multi-page-menu-renderer {
    display: flex;
    flex-direction: column;
}`
    document.head.appendChild(style);
});

function constructSearchFilter(strName, tooltipStrName, query, params, selected)
{
    let encodedParams = !params ? null : Base64Url.fromBytes(SearchParams.encode(SearchParams.fromObject(params)).finish());
    return {
        searchFilterRenderer: {
            label: { simpleText: Translations.get(strName) },
            tooltip: Translations.get(tooltipStrName),
            status: selected ? "FILTER_STATUS_SELECTED" : "FILTER_STATUS_NONE",
            navigationEndpoint: !params ? null : {
                commandMetadata: {
                    webCommandMetadata: {
                        rootVe: 4724,
                        url: `/results?search_query=${encodeURIComponent(query)}&sp=${encodeURIComponent(encodedParams)}`,
                        webPageType: "WEB_PAGE_TYPE_SEARCH"
                    }
                },
                searchEndpoint: {
                    query,
                    params: encodedParams
                }
            }
        }
    };
}

document.addEventListener("yt-page-data-updated", function(e)
{
    if (e.detail.pageType == "search")
    {
        let sp = new URLSearchParams(location.search).get("sp");
        let params = {};
        if (sp !== null)
        {
            try
            {
                let message = SearchParams.decode(Base64Url.toBytes(sp));
                params = SearchParams.toObject(message, { enums: String });
            }
            catch (e) {
                console.log(e);
            }
        }

        console.log(params);

        let filterButton = document.querySelector("#filter-button.ytd-search-header-renderer > ytd-button-renderer");
        if (filterButton)
        {
            let buttonData = filterButton.data;
            let groups = buttonData.command.openPopupAction.popup.searchFilterOptionsDialogRenderer.groups;
            let query = groups[0].searchFilterGroupRenderer.filters[0].searchFilterRenderer.navigationEndpoint.searchEndpoint.query;

            if (Settings.removeShortsTypeFilter)
            {
                groups[0].searchFilterGroupRenderer.filters.splice(1, 1);
            }

            let durationFilters = groups[1].searchFilterGroupRenderer.filters;
            if (Settings.restoreFourMinuteDurationFilters)
            {
                let selected;
                let shortParams = structuredClone(params);
                if (params.filterOptions
                && params.filterOptions.restrictDuration == "DURATION_SHORT")
                {
                    selected = true;
                    delete shortParams.filterOptions.restrictDuration;
                }
                else
                {
                    selected = false;
                    shortParams.filterOptions = shortParams.filterOptions || {};
                    shortParams.filterOptions.restrictDuration = "DURATION_SHORT";
                }

                durationFilters.splice(1, 0, constructSearchFilter(
                    "durationShort",
                    "durationShortTooltip",
                    query,
                    shortParams,
                    selected));

                let mediumParams = structuredClone(params);
                if (params.filterOptions
                && params.filterOptions.restrictDuration == "DURATION_MEDIUM")
                {
                    selected = true;
                    delete shortParams.filterOptions.restrictDuration;
                }
                else
                {
                    selected = false;
                    mediumParams.filterOptions = mediumParams.filterOptions || {};
                    mediumParams.filterOptions.restrictDuration = "DURATION_MEDIUM";
                }

                durationFilters.splice(3, 0, constructSearchFilter(
                    "durationMedium",
                    "durationMediumTooltip",
                    query,
                    mediumParams,
                    selected));
            }

            if (Settings.removeThreeMinuteDurationFilters)
            {
                durationFilters.splice(0, 1);
                durationFilters.splice(
                    Settings.restoreFourMinuteDurationFilters ? 1 : 0,
                    1);
            }

            if (Settings.restoreUploadDateLastHour)
            {
                let selected = false;
                let lastHourParams = structuredClone(params);
                if (params.filterOptions
                && params.filterOptions.restrictUploadDate == "UPLOAD_DATE_LAST_HOUR")
                {
                    selected = true;
                    delete lastHourParams.filterOptions.restrictUploadDate;
                }
                else
                {
                    lastHourParams.filterOptions = lastHourParams.filterOptions || {};
                    lastHourParams.filterOptions.restrictUploadDate = "UPLOAD_DATE_LAST_HOUR";
                }

                groups[2].searchFilterGroupRenderer.filters.splice(0, 0,
                    constructSearchFilter(
                        "uploadDateLastHour",
                        "uploadDateLastHourTooltip",
                        query,
                        lastHourParams,
                        selected));
            }

            let sortBy = Settings.renameSortByGroup;
            let viewCount = Settings.renameViewCountFilter;

            if (sortBy)
            {
                groups[4].searchFilterGroupRenderer.title = { simpleText: Translations.get("sortByGroup") };

                groups[4].searchFilterGroupRenderer.filters[0].searchFilterRenderer.tooltip
                    = Translations.get("sortByRelevanceTooltipOld");

                groups[4].searchFilterGroupRenderer.filters[1].searchFilterRenderer.tooltip
                    = Translations.get(viewCount ? "sortByViewCountTooltipOld" : "sortByPopularityTooltipOld");
            }

            if (viewCount)
            {
                if (!sortBy)
                {
                    groups[4].searchFilterGroupRenderer.filters[1].searchFilterRenderer.tooltip
                        = Translations.get("sortByViewCountTooltip");
                }

                groups[4].searchFilterGroupRenderer.filters[1].searchFilterRenderer.label
                    = { simpleText: Translations.get("sortByViewCount") };
            }

            if (Settings.restoreSortByUploadDate)
            {
                let selected = false;
                let sortByDateParams = structuredClone(params);
                if (params.sortType == "BY_DATE")
                {
                    selected = true;
                    sortByDateParams = null;
                }
                else
                {
                    sortByDateParams.sortType = "BY_DATE";
                }
                
                groups[4].searchFilterGroupRenderer.filters.splice(1, 0,
                    constructSearchFilter(
                        "sortByDate",
                        "sortByDateTooltip" + (sortBy ? "Old"  : ""),
                        query,
                        sortByDateParams,
                        selected));
            }

            if (Settings.restoreSortByUploadDate)
            {
                let selected = false;
                let sortByRatingParams = structuredClone(params);
                if (params.sortType == "BY_RATING")
                {
                    selected = true;
                    sortByRatingParams = null;
                }
                else
                {
                    sortByRatingParams.sortType = "BY_RATING";
                }

                groups[4].searchFilterGroupRenderer.filters.push(
                    constructSearchFilter(
                        "sortByRating",
                        "sortByRatingTooltip" + (sortBy ? "Old"  : ""),
                        query,
                        sortByRatingParams,
                        selected));
            }

            if (Settings.oldGroupOrder)
            {
                [ groups[0], groups[1], groups[2] ] = [ groups[2], groups[0], groups[1] ];
            }

            filterButton.data = {};
            filterButton.data = buttonData;
        }
    }
});
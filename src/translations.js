const TRANSLATION_DATA = {
    en: {
        /**
         * Strings for the actual search filters.
         */

        // Missing item
        uploadDateLastHour:                        "Last hour",
        uploadDateLastHourTooltip:                 "Search for Last hour",

        // Changed from 4 minutes to 3 minutes (but the old 4 minute filter still exists)
        durationShort:                             "Under 4 minutes",
        durationShortTooltip:                      "Search for Under 4 minutes",
        durationMedium:                            "4 - 20 minutes",
        durationMediumTooltip:                     "Search for 4 - 20 minutes",
        
        // Alternate names for existing groups
        sortByGroup:                               "Sort by",

        // Alternate names for existing items
        sortByViewCount:                           "View count",

        // Alternate tooltips for existing items
        sortByRelevanceTooltipOld:                 "Sort by relevance",
        sortByPopularityTooltipOld:                "Sort by popularity",
        sortByViewCountTooltip:                    "Prioritize by view count",
        sortByViewCountTooltipOld:                 "Sort by view count",

        // Missing item
        sortByDate:                                "Upload date",
        sortByDateTooltip:                         "Prioritize by upload date",
        sortByDateTooltipOld:                      "Sort by upload date",
        // Missing item
        sortByRating:                              "Rating",
        sortByRatingTooltip:                       "Prioritize by rating",
        sortByRatingTooltipOld:                    "Sort by rating",

        /**
         * Strings for the settings panel.
         */

        // See settings.js for what these settings actually do in detail.
        restoreUploadDateLastHourDesc:             'Restores the "Last hour" filter in the "Upload date" group.',
        restoreUploadDateLastHourLabel:            "Last hour filter",

        oldGroupOrderDesc:                         "Re-orders the groups to match the old order.",
        oldGroupOrderLabel:                        "Old group order",

        removeShortsTypeFilterDesc:                'Removes the "Shorts" filter from the "Type" group.',
        removeShortsTypeFilterLabel:               "No Shorts filter",

        restoreFourMinuteDurationFiltersDesc:      'Restores the "Under 4 minutes" and "4 - 20 minutes" filters in the "Duration" group.',
        restoreFourMinuteDurationFiltersLabel:     "4 minute filters",

        removeThreeMinuteDurationFiltersDesc:      'Removes the "Under 3 minutes" and "3 - 20 minutes" filters in the "Duration" group.',
        removeThreeMinuteDurationFiltersLabel:     "No 3 minute filters",

        renameSortByGroupDesc:                     'Renames the "Prioritize" group back to "Sort by".',
        renameSortByGroupLabel:                    "Rename Prioritize group",

        restoreSortByUploadDateDesc:               'Restores the "Upload date" filter in the "Sort by"/"Prioritize" group.',
        restoreSortByUploadDateLabel:              "Upload date filter",

        renameViewCountFilterDesc:                 'Renames the "Popularity" filter back to "View count".',
        renameViewCountFilterLabel:                "Rename Prioritize filter",

        restoreSortByRatingFilterDesc:             'Restores the "Rating" filter in the "Sort by"/"Prioritize" group.',
        restoreSortByRatingFilterLabel:            "Rating filter",

        // Panel name
        settingsPanelTitle:                        "Search filter settings",
        // Accessibility label for Back button on settings panel, should match InnerTube.
        settingsPanelBack:                         "Back",
        // Message telling the users when their settings will apply
        settingsPanelMessage:                      "Settings will apply next time you make a search",
    }
};

const Translations = {
    get hl()
    {
        let hl = "en";
        if (yt && "config_" in yt)
            hl = yt.config_.HL;

        Object.defineProperty(this, "hl", { value: hl });
        return hl;
    },

    get(id)
    {
        if (!(id in TRANSLATION_DATA["en"]))
            return `<${id}>`;

        let hl = this.hl;
        if (!(hl in TRANSLATION_DATA)
        || !(id in TRANSLATION_DATA[hl]))
            hl = "en";

        return TRANSLATION_DATA[hl][id];
    },
};

module.exports = Translations;
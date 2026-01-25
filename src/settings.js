const DEFAULT_SETTINGS = {
    /**
     * Restores the "Last hour" filter in the "Upload date" group.
     */
    restoreUploadDateLastHour: true,

    /** 
     * Re-orders the filter groups the old order.
     */
    oldGroupOrder: true,

    /**
     * Removes the "Shorts" filter from the "Type" group.
     */
    removeShortsTypeFilter: true,

    /**
     * Restores the "Under 4 minutes" and "4 - 20 minutes" filters in the
     * "Duration" group.
     */
    restoreFourMinuteDurationFilters: true,

    /**
     * Removes the "Under 3 minutes" and "3 - 20 minutes" filters in the
     * "Duration" group.
     */
    removeThreeMinuteDurationFilters: true,

    /**
     * Rename the "Prioritize" group back to "Sort by".
     */
    renameSortByGroup: true,

    /**
     * Restores the "Upload date" filter in the "Sort by"/"Prioritize"
     * group.
     */
    restoreSortByUploadDate: true,

    /**
     * Rename the "Popularity" filter back to "View count".
     */
    renameViewCountFilter: true,

    /**
     * Restores the "Rating" filter in the "Sort by"/"Prioritize"
     * group.
     */
    restoreSortByRatingFilter: true,
};

const Settings = {
    _settings: DEFAULT_SETTINGS,

    get(setting)
    {
        return this._settings[setting];
    },

    set(setting, value)
    {
        this._settings[setting] = value;
        console.log(`Set setting ${setting} to ${value}`);
        GM_setValue(setting, value);
    },

    init()
    {
        for (const setting in DEFAULT_SETTINGS)
        {
            let value = GM_getValue(setting, undefined);
            if (value !== undefined)
            {
                this._settings[setting] = value;
            }

            Object.defineProperty(this, setting, {
                get: function()
                {
                    return this.get(setting);
                },
                set: function(value)
                {
                    return this.set(setting, value);
                }
            });
        }
    },
};

module.exports = Settings;
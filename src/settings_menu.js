const Settings = require("./settings");
const Translations = require("./translations");

const SettingsMenu = {
    _builtSettingsPanel: null,
    _actionsRegistered: false,

    getSignalName(setting, toggle)
    {
        return "RSF_TOGGLE_" + setting.replace(/([A-Z])/g, "_$1").toUpperCase() + (toggle ? "_ON" : "_OFF");
    },

    getActionName(setting, toggle,)
    {
        return "yt-signal-action-rsf-toggle-" + setting.replace(/([A-Z])/g, "-$1").toLowerCase() + (toggle ? "-on" : "-off");
    },

    buildSettingsPanel()
    {
        if (this._builtSettingsPanel)
            return this._builtSettingsPanel;

        let actionHandler = null;
        for (const key in default_kevlar_base)
        {
            let obj = default_kevlar_base[key];
            if (obj && typeof obj === "function")
            {
                if (obj.prototype && obj.prototype.registerActionHandler)
                {
                    actionHandler = obj.getInstance();
                    break;
                }
            }
        }

        if (!actionHandler)
            throw new Error("Failed to get the action handler registrar :(");

        let toggleItems = [];
        for (const setting in Settings._settings)
        {
            /* Create item */
            toggleItems.push({
                toggleItemRenderer: {
                    toggled: !!Settings[setting],
                    label: { runs: [ { text: Translations.get(setting + "Label") } ] },
                    descriptionLines: [
                        { runs: [ { text: Translations.get(setting + "Desc") } ] }
                    ],
                    toggleOnActions: [
                        {
                            signalAction: {
                                signal: this.getSignalName(setting, true)
                            }
                        }
                    ],
                    toggleOffActions: [
                        {
                            signalAction: {
                                signal: this.getSignalName(setting, false)
                            }
                        }
                    ],
                }
            });

            /* Register action handlers */
            let handler = new Map;
            handler.set(setting, function()
            {
                Settings[setting] = true;
            });

            actionHandler.actionRoutingMap.set(
                this.getActionName(setting, true),
                handler
            );

            handler = new Map;
            handler.set(setting, function()
            {
                Settings[setting] = false;
            });

            actionHandler.actionRoutingMap.set(
                this.getActionName(setting, false),
                handler
            );
        }

        let panel = {
            compactLinkRenderer: {
                icon: { iconType: "SEARCH" },
                secondaryIcon: { iconType: "CHEVRON_RIGHT" },
                title: { runs: [ { text: Translations.get("settingsPanelTitle") } ] },
                serviceEndpoint: {
                    signalServiceEndpoint: {
                        signal: "CLIENT_SIGNAL",
                        actions: [
                            {
                                getMultiPageMenuAction: {
                                    menu: {
                                        multiPageMenuRenderer: {
                                            header: {
                                                simpleMenuHeaderRenderer: {
                                                    backButton: {
                                                        buttonRenderer: {
                                                            style: "STYLE_BLACK",
                                                            size: "SIZE_DEFAULT",
                                                            isDisabled: false,
                                                            icon: {
                                                                iconType: "BACK"
                                                            },
                                                            acessibilityData: {
                                                                acessibilityData: {
                                                                    label: Translations.get("settingsPanelBack")
                                                                }
                                                            }
                                                        }
                                                    },
                                                    title: { runs: [ { text: Translations.get("settingsPanelTitle") } ] },
                                                }
                                            },
                                            sections: [
                                                {
                                                    multiPageMenuSectionRenderer: {
                                                        items: [
                                                            {
                                                                messageRenderer: {
                                                                    subtext: {
                                                                        messageSubtextRenderer: {
                                                                            text: { runs: [ { text: Translations.get("settingsPanelMessage") } ] }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ].concat(toggleItems)
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        };
        this._builtSettingsPanel = panel;
        return panel;
    },

    injectSettingsPanel(section)
    {
        let panel = this.buildSettingsPanel();
        let data = section.data;
        data.items.push(panel);
        section.data = {};
        section.data = data;
    },

    onPopupOpened(e)
    {
        let elm = e.detail;
        if ("YTD-MULTI-PAGE-MENU-RENDERER" == elm.tagName)
        {
            let isAccountMenu = false;
            try
            {
                const API_URL = "/youtubei/v1/account/account_menu";
                isAccountMenu =
                    (API_URL == elm.__shady.parentNode.__data.positionTarget.data.menuRequest.commandMetadata.webCommandMetadata.apiUrl);
            }
            catch(e) {}

            if (isAccountMenu)
            {
                const onMutation = async function(records, self)
                {
                    let sections = elm.querySelector("#sections");
                    if (sections)
                    {
                        let sectionCount = NaN;
                        try
                        {
                            sectionCount = elm.data.sections.length;
                        }
                        catch (e) {}
            
                        if (sectionCount == sections.childElementCount)
                        {
                            SettingsMenu.injectSettingsPanel(sections.children[yt.config_.LOGGED_IN ? 3 : 1]);
                            self.disconnect();
                        }
                    }
                };
                
                let mo = new MutationObserver(onMutation);
                mo.observe(elm, {
                    subtree: true,
                    childList: true,
                    characterData: true
                });
            }
        }
    },

    init()
    {
        document.addEventListener("yt-popup-opened", this.onPopupOpened);
    }
};

module.exports = SettingsMenu;
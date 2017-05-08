"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var core_1 = require('angular2/core');
var sidebar_component_1 = require('../sidebar/sidebar.component');
var introduction_component_1 = require('../content/introduction.component');
var about_online_help_component_1 = require('../content/about-online-help.component');
//import { AccordionDemoComponent } from '../sidebar/demo.component';
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '/app/main/main.html',
            directives: [
                router_1.ROUTER_DIRECTIVES,
                sidebar_component_1.SidebarComponent,
            ]
        }),
        router_2.RouteConfig([
            { path: '/introduction', name: 'Introduction', component: introduction_component_1.IntroductionComponent, useAsDefault: true },
            { path: '/about-online-help', name: 'AboutOnlineHelp', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/navigating-online-help', name: 'NavigatingOnlineHelp', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/revision-history', name: 'RevisionHistory', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/additional-resources', name: 'AdditionalResources', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/accessing-rio', name: 'AccessingRIO', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/navigating-rio', name: 'NavigatingRIO', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/accessing-entities', name: 'AccessingEntities', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/logging-out-seesion-timeout', name: 'LoggingOutSessionTimeout', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/application-features-tools-overview', name: 'ApplicationFeaturesToolsOverview', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/accessing-entity-types', name: 'AccessingEntityTypes', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/using-search-function', name: 'UsingSearchFunction', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/using-service-path-sidebar', name: 'UsingServicePathSidebar', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/using-tabs', name: 'UsingTabs', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/using-links-pop-ups', name: 'UsingLinksPopUps', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/assessing-recently-viewed-favorites', name: 'RecentlyViewedItems', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/bookmarking-viewing-favorites', name: 'BookmarkingViewingFavorites', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/changing-themes', name: 'ChangingThemes', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/setting-default-home-page', name: 'SettingDefaultHomePage', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/changing-page-viewing-preferences', name: 'ChangingPageViewingPreferences', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/using-table-tools-features', name: 'UsingTableToolsFeatures', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/viewing-entity-history', name: 'ViewingEntityHistory', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/viewing-graphs', name: 'ViewingGraphs', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/viewing-device-watches', name: 'ViewingDeviceWatches', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/viewing-current-known-issues', name: 'ViewingCurrentKnownIssues', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/enterprise-view-overview', name: 'EnterpriseViewOverview', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/ims-dashboard-tab', name: 'IMSDashboardTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/enterprise-ims-scorecard-tab', name: 'EnterpriseIMSScorecardTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/map-tab', name: 'MapTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/national-entitlements-tab', name: 'NationalEntitlementsTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/enterprise-scorecards-tab', name: 'EnterpriseScorecardsTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/market-scorecards-tab', name: 'MarketScorecardsTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/cmts-scorecards-tab', name: 'CMTSScorecardsTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/spectrum-anaylzer-tab', name: 'SpectrumAnalyzerTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/market-division-hub-overview', name: 'MarketDivisionHubOverview', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/market-device-watch-tab', name: 'MarketDeviceWatchTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/family-tree-tab', name: 'FamilyTreeTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/fec-summary-tab', name: 'FECSummaryTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/market-ims-scorecard-tab', name: 'MarketIMSScorecardTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/market-ivr-tab', name: 'MarketIVRTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/modern-firmware-report-tab', name: 'ModernFirmwareReportTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/mta-battery-report-tab', name: 'MTABatteryReportTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/tree-map-tab', name: 'TreeMapTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/work-orders-tab', name: 'WorkOrdersTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/cmts-host-overview', name: 'CMTSHostOverview', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/status-tab', name: 'StatusTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/circuits-tab', name: 'CircuitsTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/cmdb-tab', name: 'CMDBTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/interfaces-tab', name: 'InterfacesTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/rf-interfaces-tab', name: 'RFInterfacesTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/scorecard-tab', name: 'ScorecardTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/tickets-tab', name: 'TicketsTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/cmts-interface-overview', name: 'CMTSInterfaceOverview', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/cmts-summary-tab', name: 'CMTSSummaryTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/if-metrics-tab', name: 'IFMetricsTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/statistics-tab', name: 'StatisticsTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/node-view-overview', name: 'NodeViewOverview', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/device-list-tab', name: 'DeviceListTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/impact-description-tab', name: 'ImpactDescriptionTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/node-ims-scorecard-tab', name: 'NodeIMSScorecardTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/ping-tab', name: 'PingTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/node-pnm-tab', name: 'NodePNMTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/node-scorecards-tab', name: 'NodeScorecardsTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/node-signal-levels-tab', name: 'NodeSignalLevelsTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/account-view-overview', name: 'AccountViewOverview', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/commercial-account-tab', name: 'CommercialAccountTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/account-device-watch-tab', name: 'AccountDeviceWatchTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/entitlements-tab', name: 'EntitlementsTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/account-ivr-tab', name: 'AccountIVRTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/provisioning-tab', name: 'ProvisioningTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/acccount-signal-levels-tab', name: 'AccountSignalLevelsTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/summary-tab', name: 'SummaryTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/account-work-orders-tab', name: 'AccountWorkOrdersTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/sub-account-to-master', name: 'SubAccountToMaster', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/resetting-account-password', name: 'ResettingAccountPassword', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/cpe-device-pages-overview', name: 'CPEDevicePagesOverview', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/understand-cpe-relationships', name: 'UnderstandCPERelationships', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/navigating-cpe-device-pages', name: 'NavigatingCPEDevicePages', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/cm-summary-tab', name: 'CMSummaryTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/provisioning-state', name: 'ProvisioningState', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/dsg-state', name: 'DSGState', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/child-devices', name: 'ChildDevices', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/cmts-graphs-tab', name: 'CMTSGraphsTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/cm-device-watch-tab', name: 'CMDeviceWatchTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/cm-dhcp-tab', name: 'CMDHCPTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/fec-tab', name: 'FECTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/interface-map-tab', name: 'InterfaceMapTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/interface-statistics-tab', name: 'InterfaceStatisticsTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/logs-tab', name: 'LogsTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/cm-pnm-tab', name: 'CMPNMTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/cm-signal-levels-tab', name: 'CMSignalLevelsTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/simple-summary-tab', name: 'SimpleSummaryTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/cm-spectrum-analyzer-tab', name: 'CMSpectrumAnalyzerTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/mta-overview', name: 'MTAOverview', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/mta-summary-tab', name: 'MTASummaryTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/mta-dhcp-tab', name: 'MTADHCPTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/stb-overview', name: 'STBOverview', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/sa-summary-tab', name: 'SASummaryTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/stb-diagnostics-tab', name: 'STBDiagnosticsTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/hydra-stb-tab', name: 'HydraSTBTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/ip-stb-summary-tab', name: 'IPSTBSummaryTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/motorola-summary-tab', name: 'MotorolaSummaryTab', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/hydra-router', name: 'HydraRouter', component: about_online_help_component_1.AboutOnlineHelpComponent },
            { path: '/cpe-device-actions', name: 'CPEDeviceActions', component: about_online_help_component_1.AboutOnlineHelpComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
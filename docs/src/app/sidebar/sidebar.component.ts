import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteParams } from 'angular2/router';
import { Collapse } from './collapse';

@Component({
  selector: 'sidebar',
  templateUrl: '/app/sidebar/sidebar.html',
  directives: [ROUTER_DIRECTIVES, Collapse]
})

export class SidebarComponent implements OnInit {
  
  topics: any;
  content: any;
  activeTopic: string;

  constructor(private _routeParams: RouteParams) {

    //console.log(this._routeParams.get('topic'));

    this.topics = [
      {
        title: 'GETTING STARTED',
        name: 'Introduction',
        isCollapsed: true,
        subtopics: [
          {
            title: 'Introduction',
            name: 'Introduction',
            subtopics: []
          },
          {
            title: 'About This Online Help',
            name: 'AboutOnlineHelp',
            isCollapsed: true,
            subtopics: [
              {
                title: 'About This Online Help Overview',
                name: 'AboutOnlineHelp'
              },/*
              {
                title: 'Navigating Online Help',
                name: 'NavigatingOnlineHelp'
              },*/
              {
                title: 'Revision History',
                name: 'RevisionHistory'
              },
              {
                title: 'Additional Resources',
                name: 'AdditionalResources'
              }
            ]
          },
          {
            title: 'Accessing RIO',
            name: 'AccessingRIO',
            subtopics: []
          },
          {
            title: 'Navigating RIO',
            name: 'NavigatingRIO',
            subtopics: []
          },
          {
            title: ' Accessing Entities',
            name: 'AccessingEntities',
            subtopics: []
          },
          {
            title: 'Logging Out/Session Time-out',
            name: 'LoggingOutSessionTimeout',
            subtopics: []
          },
        ]
      },
      {
        title: 'APPLICATION FEATURES AND TOOLS',
        name: 'ApplicationFeaturesToolsOverview',
        isCollapsed: true,
        subtopics: [
          {
            title: 'Features and Tools Overview',
            name: 'ApplicationFeaturesToolsOverview',
            subtopics: []
          },
          {
            title: 'Accessing Entity Types',
            name: 'AccessingEntityTypes',
            subtopics: []
          },
          {
            title: 'Using the Search Function',
            name: 'UsingSearchFunction',
            subtopics: []
          },
          {
            title: 'Using the Service Path Sidebar',
            name: 'UsingServicePathSidebar',
            subtopics: []
          },
          {
            title: 'Using Tabs in RIO',
            name: 'UsingTabs',
            subtopics: []
          },
          {
            title: 'Using Links and Pop-Ups',
            name: 'UsingLinksPopUps',
            subtopics: []
          },
          {
            title: 'Recently Viewed Items',
            name: 'RecentlyViewedItems',
            subtopics: []
          },
          {
            title: 'Bookmarking Favorites',
            name: 'BookmarkingViewingFavorites',
            subtopics: []
          },
          {
            title: 'Changing Themes',
            name: 'ChangingThemes',
            subtopics: []
          },
          {
            title: 'Setting Default Home Page',
            name: 'SettingDefaultHomePage',
            subtopics: []
          },
          {
            title: 'Page Viewing Preferences',
            name: 'ChangingPageViewingPreferences',
            subtopics: []
          },
          {
            title: 'Using Table Tools and Features',
            name: 'UsingTableToolsFeatures',
            subtopics: []
          },
          {
            title: 'Viewing Entity History',
            name: 'ViewingEntityHistory',
            subtopics: []
          },
          {
            title: 'Viewing Graphs',
            name: 'ViewingGraphs',
            subtopics: []
          },
          {
            title: 'Viewing Your Device Watches',
            name: 'ViewingDeviceWatches',
            subtopics: []
          },
          {
            title: 'Viewing Current Known Issues',
            name: 'ViewingCurrentKnownIssues',
            subtopics: []
          }
        ]
      },
      {
        title: 'ENTERPRISE VIEW',
        name: 'EnterpriseViewOverview',
        isCollapsed: true,
        subtopics: [
          {
            title: 'Enterprise View Overview',
            name: 'EnterpriseViewOverview',
            subtopics: []
          },
          {
            title: 'IMS Dashboard Tab',
            name: 'IMSDashboardTab',
            subtopics: []
          },
          {
            title: 'IMS Scorecard Tab',
            name: 'EnterpriseIMSScorecardTab',
            subtopics: []
          },
          {
            title: 'Map Tab',
            name: 'MapTab',
            subtopics: []
          },
          {
            title: 'National Entitlements Tab',
            name: 'NationalEntitlementsTab',
            subtopics: []
          },
          {
            title: 'Scorecards Tab',
            name: 'EnterpriseScorecardsTab',
            subtopics: []
          },
          {
            title: 'Spectrum Analyzer Tab',
            name: 'SpectrumAnalyzerTab',
            subtopics: []
          }
        ]
      },
      {
        title: 'MARKET - DIVISION - HUB VIEWS',
        name: 'MarketDivisionHubOverview',
        isCollapsed: true,
        subtopics: [
          {
            title: 'Market, Division, Hub Overview',
            name: 'MarketDivisionHubOverview',
            subtopics: []
          },
          {
            title: 'Device Watch Tab',
            name: 'MarketDeviceWatchTab',
            subtopics: []
          },
          {
            title: 'Family Tree Tab',
            name: 'FamilyTreeTab',
            subtopics: []
          },
          {
            title: 'FEC Summary Tab',
            name: 'FECSummaryTab',
            subtopics: []
          },
          {
            title: 'IMS Scorecard Tab',
            name: 'MarketIMSScorecardTab',
            subtopics: []
          },
          {
            title: 'IVR Tab',
            name: 'MarketIVRTab',
            subtopics: []
          },
          {
            title: 'Map Tab',
            name: 'MapTab',
            subtopics: []
          },
          {
            title: 'Modern Firmware Report Tab',
            name: 'ModernFirmwareReportTab',
            subtopics: []
          },
          {
            title: 'MTA Battery Report Tab',
            name: 'MTABatteryReportTab',
            subtopics: []
          },
          {
            title: 'Scorecards Tab',
            name: 'MarketScorecardsTab',
            subtopics: []
          },
          {
            title: 'Spectrum Analyzer Tab',
            name: 'SpectrumAnalyzerTab',
            subtopics: []
          },
          {
            title: 'Tree Map Tab',
            name: 'TreeMapTab',
            subtopics: []
          },
          {
            title: 'Work Orders Tab',
            name: 'WorkOrdersTab',
            subtopics: []
          }
        ]
      },
      {
        title: 'CMTS AND HOST VIEWS',
        name: 'CMTSHostOverview',
        isCollapsed: true,
        subtopics: [
          {
            title: 'CMTS/Host Overview',
            name: 'CMTSHostOverview',
            subtopics: []
          },
          {
            title: 'Status Tab (Xymon Info)',
            name: 'StatusTab',
            subtopics: []
          },
          {
            title: 'Circuits Tab',
            name: 'CircuitsTab',
            subtopics: []
          },
          {
            title: 'CMDB Tab',
            name: 'CMDBTab',
            subtopics: []
          },
          {
            title: 'Family Tree Tab',
            name: 'FamilyTreeTab',
            subtopics: []
          },
          {
            title: 'Interfaces Tab',
            name: 'InterfacesTab',
            subtopics: []
          },
          {
            title: 'Map Tab',
            name: 'MapTab',
            subtopics: []
          },
          {
            title: 'RF Interfaces Tab',
            name: 'RFInterfacesTab',
            subtopics: []
          },
          {
            title: 'Scorecard Tab',
            name: 'ScorecardTab',
            subtopics: []
          },
          {
            title: 'Spectrum Analyzer Tab',
            name: 'SpectrumAnalyzerTab',
            subtopics: []
          },
          {
            title: 'Tickets Tab',
            name: 'TicketsTab',
            subtopics: []
          },
          {
            title: 'CMTS Interface View',
            name: 'CMTSInterfaceOverview',
            isCollapsed: true,
            subtopics: [
              {
                title: 'CMTS Interface Overview',
                name: 'CMTSInterfaceOverview'
              },
              {
                title: 'Summary Tab',
                name: 'CMTSSummaryTab'
              },
              {
                title: 'IF Metrics Tab',
                name: 'IFMetricsTab'
              },
              {
                title: 'Statistics Tab',
                name: 'StatisticsTab'
              }
            ]
          }
        ]
      },
      {
        title: 'NODE VIEW',
        name: 'NodeViewOverview',
        isCollapsed: true,
        subtopics: [
          {
            title: 'Node View Overview',
            name: 'NodeViewOverview',
            subtopics: []
          },
          {
            title: 'Device List Tab',
            name: 'DeviceListTab',
            subtopics: []
          },
          {
            title: 'Family Tree Tab',
            name: 'FamilyTreeTab',
            subtopics: []
          },
          {
            title: 'Impact Description Tab',
            name: 'ImpactDescriptionTab',
            subtopics: []
          },
          {
            title: 'IMS Scorecard Tab',
            name: 'NodeIMSScorecardTab',
            subtopics: []
          },
          {
            title: 'IVR Tab',
            name: 'MarketIVRTab',
            subtopics: []
          },
          {
            title: 'Map Tab',
            name: 'MapTab',
            subtopics: []
          },
          {
            title: 'Ping Tab',
            name: 'PingTab',
            subtopics: []
          },
          {
            title: 'PNM Tab',
            name: 'NodePNMTab',
            subtopics: []
          },
          {
            title: 'Scorecards Tab',
            name: 'NodeScorecardsTab',
            subtopics: []
          },
          {
            title: 'Signal Levels Tab',
            name: 'NodeSignalLevelsTab',
            subtopics: []
          },
          {
            title: 'Spectrum Analyzer Tab',
            name: 'SpectrumAnalyzerTab',
            subtopics: []
          },
          {
            title: 'Work Orders Tab',
            name: 'WorkOrdersTab',
            subtopics: []
          }
        ]
      },
      {
        title: 'ACCOUNT VIEW',
        name: 'AccountViewOverview',
        isCollapsed: true,
        subtopics: [
          {
            title: 'Account View Overview',
            name: 'AccountViewOverview',
            subtopics: []
          },
          {
            title: 'Commercial Account Tab',
            name: 'CommercialAccountTab',
            subtopics: []
          },
          {
            title: 'Device Watch Tab',
            name: 'AccountDeviceWatchTab',
            subtopics: []
          },
          {
            title: 'Entitlements Tab',
            name: 'EntitlementsTab',
            subtopics: []
          },
          {
            title: 'Family Tree Tab',
            name: 'FamilyTreeTab',
            subtopics: []
          },
          {
            title: 'IVR Tab',
            name: 'AccountIVRTab',
            subtopics: []
          },
          {
            title: 'Provisioning Tab',
            name: 'ProvisioningTab',
            subtopics: []
          },
          {
            title: 'Signal Levels Tab',
            name: 'AccountSignalLevelsTab',
            subtopics: []
          },
          {
            title: 'Summary Tab',
            name: 'SummaryTab',
            subtopics: []
          },
          {
            title: 'Work Orders Tab',
            name: 'AccountWorkOrdersTab',
            subtopics: []
          },
          {
            title: 'Promoting a Sub-Account',
            name: 'SubAccountToMaster',
            subtopics: []
          },
          {
            title: 'Ressetting Account Password (Care Only)',
            name: 'ResettingAccountPassword',
            subtopics: []
          }
        ]
      },
      {
        title: 'CPE DEVICE VIEWS',
        name: 'CPEDevicePagesOverview',
        isCollapsed: true,
        subtopics: [
          {
            title: 'CPE Device Pages Overview',
            name: 'CPEDevicePagesOverview',
            subtopics: []
          },
          {
            title: 'CPE Relationships',
            name: 'UnderstandCPERelationships',
            subtopics: []
          },
          {
            title: 'Navigating CPE Device Pages',
            name: 'NavigatingCPEDevicePages',
            subtopics: []
          },
          {
            title: 'Cable Modem Pages',
            name: 'CMSummaryTab',
            isCollapsed: true,
            subtopics: [
              {
                title: 'CM Summary Tab',
                name: 'CMSummaryTab',
                isCollapsed: true,
                subtopics: [
                  {
                    title: 'CM Summary Tab',
                    name: 'CMSummaryTab',
                  },
                  {
                    title: 'Provisioning State',
                    name: 'ProvisioningState'
                  },
                  {
                    title: 'DSG State',
                    name: 'DSGState'
                  },
                  {
                    title: 'Child Devices',
                    name: 'ChildDevices'
                  }
                ]
              },
              {
                title: 'CMTS Graphs Tab',
                name: 'CMTSGraphsTab',
                subtopics: []
              },
              {
                title: 'Device Watch Tab',
                name: 'CMDeviceWatchTab',
                subtopics: []
              },
              {
                title: 'DHCP Tab',
                name: 'CMDHCPTab',
                subtopics: []
              },
              {
                title: 'FEC Tab',
                name: 'FECTab',
                subtopics: []
              },
              {
                title: 'Interface Map Tab',
                name: 'InterfaceMapTab',
                subtopics: []
              },
              {
                title: 'Interface Statistics Tab',
                name: 'InterfaceStatisticsTab',
                subtopics: []
              },
              {
                title: 'Logs Tab',
                name: 'LogsTab',
                subtopics: []
              },
              {
                title: 'PNM Tab',
                name: 'CMPNMTab',
                subtopics: []
              },
              {
                title: 'Signal Levels Tab',
                name: 'CMSignalLevelsTab',
                subtopics: []
              },
              {
                title: 'Simple Summary Tab',
                name: 'SimpleSummaryTab',
                subtopics: []
              },
              {
                title: 'Spectrum Analyzer Tab',
                name: 'SpectrumAnalyzerTab',
                subtopics: []
              }
            ]
          },
          {
            title: 'MTA Pages',
            name: 'MTAOverview',
            isCollapsed: true,
            subtopics: [
              {
                title: 'MTA Overview',
                name: 'MTAOverview'
              },
              {
                title: 'MTA Summary Tab',
                name: 'MTASummaryTab'
              },
              {
                title: 'CMTS Graphs Tab',
                name: 'CMTSGraphsTab'
              },
              {
                title: 'DHCP Tab',
                name: 'MTADHCPTab'
              }
            ]
          },
          {
            title: 'STB Pages',
            name: 'STBOverview',
            isCollapsed: true,
            subtopics: [
              {
                title: 'STB Overview',
                name: 'STBOverview'
              },
              {
                title: 'SA Summary Tab',
                name: 'SASummaryTab'
              },
              {
                title: 'STB Diagnostics Tab',
                name: 'STBDiagnosticsTab'
              },
              {
                title: 'Hydra STB Tab',
                name: 'HydraSTBTab'
              },
              {
                title: 'IP STB Summary Tab',
                name: 'IPSTBSummaryTab'
              },
              {
                title: 'Motorola Summary Tab',
                name: 'MotorolaSummaryTab'
              }
            ]
          },
          {
            title: 'Hydra Router',
            name: 'HydraRouter',
            subtopics: []
          },
          {
            title: 'CPE Device Actions',
            name: 'CPEDeviceActions',
            subtopics: [

            ]
          }
        ]
      },
      {
        title: 'FAULT MANAGEMENT MODULE',
        isCollapsed: true,
        subtopics: []
      },
      {
        title: 'APPLICATIONS MODULE',
        isCollapsed: true,
        subtopics: []
      },
      {
        title: 'SEARCH MODULE',
        isCollapsed: true,
        subtopics: []
      },
      {
        title: 'TECH OPS MODULE',
        isCollapsed: true,
        subtopics: []
      }
    ];

    // 2 Loops through topics for 2 layers of collapsible
    for (let topic of this.topics) {
      // Check if this object has subtopics
      if (topic.subtopics.length) {
        for (let subtopic of topic.subtopics) {
          // Check if this sub object has subtopics
          if (subtopic.subtopics.length) {
            let elementPos = subtopic.subtopics.map(function(x) {return x.name; }).indexOf('AboutOnlineHelp');
            // Search sub object subtopic for match
            if (elementPos > -1) {
              subtopic.isCollapsed = false;
            }
          }
        }
        let elementPos = topic.subtopics.map(function(x) {return x.name; }).indexOf('AboutOnlineHelp');
        // Search sub object subtopic for match
        if (elementPos > -1) {
          topic.isCollapsed = false;
        }
      }
    }
  }

  ngOnInit() {
    //this.activeTopic = this._routeParams.get('topic');

    // Do work here to set topics is collapsed value based on active topic
  /*
    if (this.activeTopic.length) {

    }
*/
  }

}
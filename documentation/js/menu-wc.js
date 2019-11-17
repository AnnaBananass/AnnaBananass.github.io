'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">medcom-brannskador documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ee7dbbb242a61723deab062467d92915"' : 'data-target="#xs-components-links-module-AppModule-ee7dbbb242a61723deab062467d92915"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ee7dbbb242a61723deab062467d92915"' :
                                            'id="xs-components-links-module-AppModule-ee7dbbb242a61723deab062467d92915"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContentModule.html" data-type="entity-link">ContentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContentModule-c9e7ebd61ba67b98f9768021d206fe16"' : 'data-target="#xs-components-links-module-ContentModule-c9e7ebd61ba67b98f9768021d206fe16"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContentModule-c9e7ebd61ba67b98f9768021d206fe16"' :
                                            'id="xs-components-links-module-ContentModule-c9e7ebd61ba67b98f9768021d206fe16"' }>
                                            <li class="link">
                                                <a href="components/CardConfirmationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardConfirmationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardDefaultComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardDefaultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardFormFetchCaseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardFormFetchCaseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardImageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardTmplComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardTmplComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FrontpageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FrontpageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Page2Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Page2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SummaryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SummaryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FooterModule.html" data-type="entity-link">FooterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FooterModule-2a095c99a494195a72f0f0de1886b042"' : 'data-target="#xs-components-links-module-FooterModule-2a095c99a494195a72f0f0de1886b042"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FooterModule-2a095c99a494195a72f0f0de1886b042"' :
                                            'id="xs-components-links-module-FooterModule-2a095c99a494195a72f0f0de1886b042"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderModule.html" data-type="entity-link">HeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HeaderModule-60165970baea508863a0f237e7624f73"' : 'data-target="#xs-components-links-module-HeaderModule-60165970baea508863a0f237e7624f73"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderModule-60165970baea508863a0f237e7624f73"' :
                                            'id="xs-components-links-module-HeaderModule-60165970baea508863a0f237e7624f73"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Case.html" data-type="entity-link">Case</a>
                            </li>
                            <li class="link">
                                <a href="classes/Image.html" data-type="entity-link">Image</a>
                            </li>
                            <li class="link">
                                <a href="classes/Patient.html" data-type="entity-link">Patient</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CaseDataService.html" data-type="entity-link">CaseDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CaseNrService.html" data-type="entity-link">CaseNrService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpService.html" data-type="entity-link">HttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploadService.html" data-type="entity-link">UploadService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/RouteInfo.html" data-type="entity-link">RouteInfo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
import { Component, Inject, OnInit } from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  constructionPlantLeasing: string = `Khon'Structure provides access to high-quality, well-maintained construction equipment,
                directly addressing the scarcity of adequate machinery for contractors across South Africa.
                Our fleet is deployed to support vital infrastructure projects nationwide. We engage with a diverse range of clients,
                from established firms like Down Touch Investments (Pty) Ltd on major routes such as the Rehabilitation of National Route R56,
                to dynamic groups like GEMINI INDUSTRIAL GROUP for projects like the Rehabilitation of R415 from Maluti to the Lesotho Border,
                and partners such as Mqhelewethu Cnice Logistics JV Msalela for specialized tasks like bridge widening. We offer flexible leasing terms,
                including daily dry rates, and engage in long-term contracts, such as a 6-year SANRAL agreement.`;

  fleetManagement: string = `Our commitment to operational excellence is underscored by our meticulous Plant and Fleet Management services.
                      Khon'Structure ensures its equipment adheres to strict maintenance plans, diligently maintained to minimize downtime and maximize reliability.
                      This rigorous approach guarantees that contractors receive consistently high-performing equipment, leading to reduced project delays and enhanced efficiency.
                      Our expertise is backed by a leadership team with deep roots in engineering and transport, including advisors from the Department of Transport and prominent engineering consultancies.
                      This robust internal management capability is fundamental to the reliable provision of our leasing services.
                      We then offer these services to other plant owners in order to get their plant in shape as well earn managed revenue.`;

  investmentChambers: string = `Khon'Structure's most innovative offering is our alternative investment platform,
                      designed to give everyday people access to the lucrative construction industry.
                      Through our "Investment Chambers," we facilitate fractional ownership of construction plant,
                      enabling individuals, particularly those within communities where infrastructure development is occurring,
                      to invest in high-value assets with smaller capital outlays. Investors earn returns proportional
                      to their fractional share, directly benefiting from the operational success of the equipment.
                      This service not only provides a unique investment opportunity but also serves as a vital alternative
                        funding mechanism for Khon'Structure to continuously acquire new, modern equipment, thereby reinforcing
                        our leasing capabilities and fostering inclusive economic participation and shared value creation within
                        communities. While the current minimum investment is R100,000, we aspire to reduce it to as little as R1000 to
                          enhance accessibility`;
  showConstructionPlantLeasing = false;
  showFleetManagement = false;
  showInvestmentChambers = false;

    constructor(@Inject(DOCUMENT) private readonly document: Document) {
           }

        ngOnInit(): void {
      this.addScript('assets/js/script.js');
    }

    private addScript(scriptSrc: string) {
          const script = this.document.createElement('script');
          script.type = 'text/javascript';
          script.src = scriptSrc;
          script.async = true;
          this.document.head.appendChild(script);
      }

      showConstructionPlantLeasingPara(){
        this.showConstructionPlantLeasing= true;
        this.showFleetManagement = false;
        this.showInvestmentChambers = false;
      }

      showFleetManagementPara(){
        this.showFleetManagement = true;
        this.showConstructionPlantLeasing= false;
        this.showInvestmentChambers = false;
      }

      showInvestmentChambersPara(){
        this.showInvestmentChambers = true;
        this.showFleetManagement = false;
        this.showConstructionPlantLeasing= false;
      }

}

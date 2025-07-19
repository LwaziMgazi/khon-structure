import { AfterViewInit, Component, Inject, OnInit , ViewChild, ElementRef} from '@angular/core';
import {DOCUMENT} from '@angular/common';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit, AfterViewInit {
  @ViewChild('Community') communityDiv!: ElementRef;
  @ViewChild('Industry') industryDiv!: ElementRef;
  @ViewChild('Investment') investmentDiv!: ElementRef;

  //imgElements
  @ViewChild('InvestmentImg') investmentImgDiv!: ElementRef;
  @ViewChild('IndustryImg') industryImgDiv!: ElementRef;
  @ViewChild('CommunityImg') communityImgDiv!: ElementRef;

   currentTitle:any;
   currentContent: string ='';
   constructor(@Inject(DOCUMENT) private readonly document: Document) {
      }

  ngOnInit(): void {
    this.addScript('assets/js/script.js');


  }
  ngAfterViewInit(): void {
    this.changeHeadingBackgroundCommunity();
    this.changeHeadingBackgroundInvestment();
    this.changeHeadingBackgroundIndustry();
  }

  private addScript(scriptSrc: string) {
        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = scriptSrc;
        script.async = true;
        this.document.head.appendChild(script);
    }

    addContenttoModal(title: string) {
      this.currentTitle = title;
      if(title === 'INVESTMENT APPROACH') {
       this.currentContent = `Khon’Structure has two tiers to its approach. The first is the construction
       and leasing arm ofthe company, where we do rigorous demand analysis before acquiring plant needed for ourproject pipeline.
       Once assets have been identified, investors are given an opportunity forfractional ownership. This fractional ownership gives them
       rights to share in the rental incomeproportional to their stake. To ensure full
        optimization of capital and assets, we only look forreputable clients/departments and projects in reasonably safe areas.`
      } else if(title === 'INDUSTRY EXPERTISE'){
        this.currentContent = `Khon’Structure is made great by the highly capable people behind it. Ndabenhle,
        the founderand MD of Khon’Structure is also the founder of travel tech company AirStudent Travel and aM&G
        200 Young Person of the Year. Ndabenhle is an Allan Gray fellow and his ties to thecommunity played a role in
         Khon’Structure securing funding from E2 Investments. The realsecret sauce is in the people behind the scenes -
         Mxolisi Ntshangase is the founder and CEO ofUmzuzo, a leading Engineering Consultancy in KZN. Malusi Ntshangase PR Eng,
          who playsan advisory role is currently the Chief Engineer at the Department of Transport KZN.`
      }else if( title === 'COMMUNITY IMPACT'){
        this.currentContent = `Not only do we combat equipment scarcity in infrastructure development,
        we also look toensure that our communities benefit financially from the development that is happeningaround them.
        The mission is to use construction as a way to grow financial involvement in our communities, and give people
         dignified ways of earning passive income.`
      }
    }

    changeHeadingBackgroundCommunity() {
     this.communityImgDiv.nativeElement.addEventListener('mouseenter',()=>{
       this.communityDiv.nativeElement.style.backgroundColor= '#002B7F';
     });

      this.communityImgDiv.nativeElement.addEventListener('mouseleave',()=>{
       this.communityDiv.nativeElement.style.backgroundColor= '#FFFFFF';
     });

    }

      changeHeadingBackgroundInvestment() {
     this.investmentImgDiv.nativeElement.addEventListener('mouseenter',()=>{
       this.investmentDiv.nativeElement.style.backgroundColor= '#002B7F';
     });

      this.investmentImgDiv.nativeElement.addEventListener('mouseleave',()=>{
       this.investmentDiv.nativeElement.style.backgroundColor= '#FFFFFF';
     });

    }

    changeHeadingBackgroundIndustry() {
     this.industryImgDiv.nativeElement.addEventListener('mouseenter',()=>{
       this.industryDiv.nativeElement.style.backgroundColor= '#002B7F';
     });

      this.industryImgDiv.nativeElement.addEventListener('mouseleave',()=>{
       this.industryDiv.nativeElement.style.backgroundColor= '#FFFFFF';
     });

    }


}

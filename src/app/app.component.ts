import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { WhyChooseUsComponent } from "./components/why-choose-us/why-choose-us.component";
import { TrendingCatsComponent } from "./components/trending-cats/trending-cats.component";
import { ShopShowcaseComponent } from './components/shop-showcase/shop-showcase.component';
import { AdoptRescueSectionComponent } from "./components/adopt-rescue-section/adopt-rescue-section.component";
import { FunCommunitySectionComponent } from "./components/fun-community-section/fun-community-section.component";
import { ContactUsSectionComponent } from "./components/contact-us-section/contact-us-section.component";
import { FooterSectionComponent } from "./components/footer-section/footer-section.component";
import { CareSectionComponent } from "./components/care-section/care-section.component";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, NavbarComponent,
    HeroSectionComponent, WhyChooseUsComponent,
    TrendingCatsComponent, ShopShowcaseComponent,
    AdoptRescueSectionComponent, FunCommunitySectionComponent,
    ContactUsSectionComponent, FooterSectionComponent,
    CareSectionComponent, SignupComponent, LoginComponent,
  CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cats-for-cuteness';

  showSignup=false;
  showLogin=false;

  openSignup(){
    console.log("Signup button clicked");
    this.showSignup=true;
    this.showLogin=false;
  }

  openLogin(){
    console.log("Login button clicked");
    this.showLogin=true;
    this.showSignup=false;
  }

  closeForm(){
    this.showSignup=false;
    this.showLogin=false;
  }
}

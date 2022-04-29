import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { ChartComponent } from './chart/chart.component';
import { HeroAreaComponent } from './hero-area/hero-area.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { VisionComponent } from './vision/vision.component';
import { WorkComponent } from './work/work.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FaqComponent } from './faq/faq.component';
import { BuyTodayComponent } from './buy-today/buy-today.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroAreaComponent,
    VisionComponent,
    CategoryComponent,
    BrandComponent,
    ChartComponent,
    WorkComponent,
    PortfolioComponent,
    TestimonialComponent,
    FooterComponent,
    PresentationComponent,
    FaqComponent,
    BuyTodayComponent,
    PricingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SlickCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import React from "react";
import { Carousel } from "../../components/Carousel-component/Carousel-component";
import { EventsComponent } from "../../components/Events-component/Events-component";
import { OurProposal } from "../../components/Our-Proposal-Component/Our-Proposal-Component";
import { Recommendations } from "../../components/Recommendations-component/Recommendations-component";
import { Testimonial } from "../../components/Testimonials-component/Testimonial-component";

export const HomePage = () => {

  return (
    <div>
      <Carousel />
      <OurProposal />
      <Recommendations/>
      <EventsComponent />
      <Testimonial />
    </div>
  )
}
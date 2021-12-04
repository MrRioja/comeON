import React from "react";

import { Destiny } from "../../components/Destiny";

import { Container } from "./styles";

export function SightsExplore() {
  return (
    <Container>
      <Destiny
        uri="https://images.pexels.com/photos/1570610/pexels-photo-1570610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        destinyName="Machu Picchu"
        destinyPeriod="30 April - 12 May 2021"
      />

      <Destiny
        uri="https://images.pexels.com/photos/306381/pexels-photo-306381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        destinyName="Victoria Falls"
        destinyPeriod="23 Jun - 30 Jun 2021"
      />

      <Destiny
        uri="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        destinyName="Maldives"
        destinyPeriod="26 Jun - 29 Jun 2021"
      />

      <Destiny
        uri="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        destinyName="Vaitāpē, French Polynesia"
        destinyPeriod="15 Mar - 19 Mar 2021"
      />
    </Container>
  );
}

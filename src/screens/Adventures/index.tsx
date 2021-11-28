import React from "react";

import { Destiny } from "../../components/Destiny";

import { Container } from "./styles";

export function Adventures() {
  return (
    <Container>
      <Destiny
        uri="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        destinyName="Mountain climbing - Field, Canada"
        destinyPeriod="21 Aug - 28 Aug 2021"
      />

      <Destiny
        uri="https://images.pexels.com/photos/1619299/pexels-photo-1619299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        destinyName="Montain bike"
        destinyPeriod="01 Nov - 12 Nov 2021"
      />

      <Destiny
        uri="https://images.pexels.com/photos/8099244/pexels-photo-8099244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        destinyName="Balloon ride - Boituva"
        destinyPeriod="03 Feb - 07 Feb 2021"
      />

      <Destiny
        uri="https://images.pexels.com/photos/1790184/pexels-photo-1790184.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        destinyName="Stand up paddle"
        destinyPeriod="13 Feb - 15 Jul 2021"
      />
    </Container>
  );
}

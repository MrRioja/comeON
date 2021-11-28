import React from "react";

import { Destiny } from "../../components/Destiny";

import { Container } from "./styles";

export function Tours() {
  return (
    <Container>
      <Destiny
        uri="https://images.pexels.com/photos/1581693/pexels-photo-1581693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        destinyName="Palace At Winchester"
        destinyPeriod="16 Mar - 20 Mar 2021"
      />

      <Destiny
        uri="https://images.pexels.com/photos/8430474/pexels-photo-8430474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        destinyName="Eiffel Tower"
        destinyPeriod="01 Jan - 09 Jan 2021"
      />

      <Destiny
        uri="https://images.pexels.com/photos/5686514/pexels-photo-5686514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        destinyName="Dubai, United Arab Emirates"
        destinyPeriod="21 Jan - 25 Dec 2021"
      />

      <Destiny
        uri="https://images.pexels.com/photos/3772630/pexels-photo-3772630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        destinyName="Egypt"
        destinyPeriod="21 Jan - 25 Dec 2021"
      />
    </Container>
  );
}

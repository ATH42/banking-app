"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp end={amount} decimals={2} decimal="," prefix="EUR " />
    </div>
  );
};

export default AnimatedCounter;

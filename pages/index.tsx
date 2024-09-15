"use client";
import type { NextPage } from "next";
import GroupComponent from "../components/group-component";
import Main from "../components/main";
import { useState } from "react";

const V: NextPage = () => {
  const [data, setData] = useState(null);

  return (
    <div className="w-full h-screen bg-gray-100 overflow-x-auto flex flex-col items-center justify-start pt-0 pb-0 pl-0 pr-0 box-border gap-[15px] leading-[normal] tracking-[normal]">
      <div className="w-[35.6px] h-[35.6px] relative overflow-hidden shrink-0 hidden" />
      <div className="w-[42.3px] h-[45.6px] relative hidden" />
      <GroupComponent data={data} setData={setData} />
      <Main data={data} setData={setData} />
    </div>
  );
};

export default V;

import Contact from "@/components/site/Contact";
import Header from "@/components/site/Header";
import Services from "@/components/site/Services";
import SiteLayout from "@/components/site/SiteLayout";
import styled from "@emotion/styled";
import React from "react";

const Page = () => {
  return (
    <>
      <Header />
      <Services />
      <Contact />
    </>
  );
};

export default Page;

Page.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

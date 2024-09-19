import { HeroHeader, ContentSection } from "@/types/contents"

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
==================== */

export const heroHeader: HeroHeader = {
  header: `Monitor Customer Lifetime Value with Ease`,
  subheader: `Track, predict, and optimize the lifetime value of your customers with advanced insights and real-time data`,
  image: `/Insurance.jpg`,
  lightImage: undefined,
  darkImage: undefined
}

export const featureCards: ContentSection = {
  header: `Why Choose CLV Monitoring?`,
  subheader: `Enhance your strategies with cutting-edge insights`,
  content: [
    {
      text: `Predict Customer Value`,
      subtext: `Accurately estimate the lifetime value of each customer based on past behavior and trends.`,
      icon: "barChart", // Ensure the corresponding icon exists in your Icons component
    },
    {
      text: `Target High-Value Customers`,
      subtext: `Identify which customers bring long-term value and prioritize them for personalized strategies.`,
      icon: "target", // Adjust to fit your icon library
    },
    {
      text: `Maximize Retention`,
      subtext: `Understand when and why customers might churn and take proactive steps to retain them.`,
      icon: "retention", // Adjust to fit your icon library
    },
    {
      text: `Optimize Marketing Spend`,
      subtext: `Allocate resources efficiently by focusing on customers with high lifetime value.`,
      icon: "dollarSign", // Adjust to fit your icon library
    },
  ],
}

export const features: ContentSection = {
  header: `CLV Monitoring Features`,
  subheader: `Monitor, Predict, and Act`,
  image: `/car.jpg`, // Replace with your features image
  content: [
    {
      text: `Real-Time Tracking`,
      subtext: `Monitor customer behavior and value metrics in real-time.`,
      icon: "clock",
    },
    {
      text: `Predictive Analytics`,
      subtext: `Use AI-powered algorithms to forecast future customer behavior and lifetime value.`,
      icon: "forecast",
    },
    {
      text: `Customizable Dashboards`,
      subtext: `Tailor your analytics to focus on the metrics that matter most to your business.`,
      icon: "dashboard",
    },
  ],
}

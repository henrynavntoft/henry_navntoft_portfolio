import React from "react";
import { Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const About = () => {
  return (
    <section id="about">
      <Title level={1}>Henry Lundberg Navntoft</Title>
      <Title level={3}>Designer & Developer</Title>
      <Paragraph>
        Born in 2000 in <Text strong>Copenhagen, Denmark.</Text>
        <br />
        <br />I am a firm believer that web design should be{" "}
        <Text strong>simple</Text>, easy to understand, and functional.
        <br />
        <br />
        My goal is to contribute my young and <Text strong>unbiased</Text>{" "}
        perspective to make existing designs even more effective and{" "}
        <Text strong>user-friendly</Text>.
        <br />
        <br />I am passionate about improving and optimising web experiences,
        and I aspire to help create digital spaces that are both{" "}
        <Text strong>intuitive</Text> and <Text strong>visually appealing</Text>
        .
        <br />
        <br />
        Interested in talking / seeing some of my <Text strong>
          projects?
        </Text>{" "}
        Continue scrolling!
      </Paragraph>
    </section>
  );
};

export default About;

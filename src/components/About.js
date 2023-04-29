import React from "react";
import { Typography, Avatar, Divider, Tag, Row, Col } from "antd";

const { Title, Paragraph, Text } = Typography;

const About = () => {
  return (
    <section id="about">
      <Row align="middle" justify="center">
        <Col xs={24} sm={24} md={6}>
          <Avatar size={200} src="/images/avatar.jpg" />
        </Col>
        <Col xs={24} sm={24} md={18}>
          <Title level={1}>Henry Lundberg Navntoft</Title>
          <Title level={3}>Designer & Developer</Title>
        </Col>
      </Row>
      <Divider></Divider>
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
        <br />I am passionate about improving and optimizing web experiences,
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
      <Divider></Divider>
      <Row>
        <Col>
          <Tag color="blue">Web Design</Tag>
          <Tag color="green">Development</Tag>
          <Tag color="orange">Optimization</Tag>
          <Tag color="red">UI/UX</Tag>
          <Tag color="purple">User-Friendly</Tag>
        </Col>
      </Row>
    </section>
  );
};

export default About;

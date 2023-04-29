import React from "react";
import { Card, Typography, Button } from "antd";

const { Title, Paragraph } = Typography;

const Resume = () => {
  return (
    <section id="resume">
      <Card
        style={{
          textAlign: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "5px",
        }}
      >
        <Title level={2}>Resume</Title>
        <Paragraph>
          You can read more about me and my experience here...
        </Paragraph>
        <Button
          type="primary"
          href="download/Resume_Henry-Navntoft.pdf"
          target="_blank"
        >
          Open Resume
        </Button>
      </Card>
    </section>
  );
};

export default Resume;

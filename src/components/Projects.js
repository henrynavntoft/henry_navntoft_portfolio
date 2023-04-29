import React from "react";
import { Card, Row, Col, Typography } from "antd";
import styles from "./Project.module.css";

const { Title, Paragraph, Link } = Typography;

const Projects = ({ projects }) => {
  return (
    <section id="project-container">
      <Title level={2}>Projects</Title>
      <div className={styles["projects-wrapper"]}>
        <Row gutter={[16, 16]} id="projects">
          <Col span={8}>
            <Card
              title={
                <a
                  href="https://github.com/henrynavntoft/charlie-tango-case"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EDC - Find Buyers
                </a>
              }
              bordered={false}
              className={styles["project-card"]}
            >
              <Paragraph>
                During my third semester at KEA, we collaborated with Charlie
                Tango on a case for the real estate company EDC, utilizing
                Next.js. The objective of this case was to assist individuals
                contemplating selling their property (the seller) in acquiring
                insights about the market prior to collaborating with a real
                estate agent. By doing so, they would gain an understanding of
                their properties value and prospective buyers within their
                vicinity before initiating the process or partnering with an
                agent.
              </Paragraph>
              <Link
                href="https://github.com/henrynavntoft/charlie-tango-case"
                target="_blank"
              >
                GitHub →
              </Link>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={
                <a
                  href="https://github.com/henrynavntoft/henry-navntoft_hacked_hogwarts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hacked Hogwarts
                </a>
              }
              bordered={false}
              className={styles["project-card"]}
            >
              <Paragraph>
                During the start of my third semester at KEA, I created Hacked
                Hogwarts, an interactive web application that simulates a cyber
                attack on the renowned Hogwarts School of Witchcraft and
                Wizardry. By employing fundamental JavaScript techniques, such
                as filtering and sorting, I designed an intuitive user interface
                that allows users to actively engage with the simulated cyber
                attack scenario.
              </Paragraph>
              <Link
                href="https://github.com/henrynavntoft/henry-navntoft_hacked_hogwarts"
                target="_blank"
              >
                GitHub →
              </Link>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={
                <a
                  href="https://github.com/henrynavntoft/tasklist_edx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tasklist - EdX course
                </a>
              }
              bordered={false}
              className={styles["project-card"]}
            >
              <Paragraph>
                In addition to my projects at KEA, I have completed a task list
                project while participating in a HarvardX course. This project
                utilized HTML, CSS, and JavaScript to create a user-friendly and
                interactive task management tool. The application enabled users
                to store tasks in local storage, ensuring easy access and
                convenience.
              </Paragraph>
              <Link
                href="https://github.com/henrynavntoft/tasklist_edx"
                target="_blank"
              >
                GitHub →
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Projects;

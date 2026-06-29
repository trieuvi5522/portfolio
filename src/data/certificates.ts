import { ls, type LocaleString } from "./types";

export interface Certificate {
  /** Credential name */
  title: LocaleString;
  /** Issuing organization, e.g. "Node-RED Academy · FlowFuse" */
  issuer: string;
  /** ISO date the credential was issued */
  date: string;
  /** Credential / certificate number, if any */
  credentialId?: string;
  /** Preview image key relative to src/assets/certificates (e.g. "node-red-advanced.png") */
  image?: string;
  /** Public path to the certificate PDF (served from /public) */
  file?: string;
  /** External verification URL, if the issuer provides one */
  verifyUrl?: string;
}

export interface CertificateGroup {
  id: string;
  /** Category name shown as the section heading */
  name: LocaleString;
  /** Short blurb describing the category */
  blurb?: LocaleString;
  certificates: Certificate[];
}

/** Grouped credentials shown on the Certificates page. Add new groups/entries here. */
export const certificateGroups: CertificateGroup[] = [
  {
    id: "node-red",
    name: ls("Node-RED", "Node-RED"),
    blurb: ls(
      "Low-code flow programming for event-driven applications and IoT data pipelines.",
      "Lập trình luồng low-code cho ứng dụng hướng sự kiện và pipeline dữ liệu IoT."
    ),
    certificates: [
      {
        title: ls("Node-RED Advanced", "Node-RED Advanced"),
        issuer: "Node-RED Academy · FlowFuse",
        date: "2026-03-03",
        credentialId: "69a715b90cbca6264e0835ee",
        image: "node-red-advanced.png",
        file: "/certificates/node-red-advanced.pdf",
        verifyUrl: "https://mycourse.app/kDsQJiVhbz0V4zitb",
      },
      {
        title: ls("Node-RED Fundamentals", "Node-RED Fundamentals"),
        issuer: "Node-RED Academy · FlowFuse",
        date: "2025-11-18",
        credentialId: "691c1b8cc240a1f5ed00bc76",
        image: "node-red-fundamentals.png",
        file: "/certificates/node-red-fundamentals.pdf",
        verifyUrl: "https://mycourse.app/SGkvtT6UySPe5mU3O",
      },
    ],
  },
  {
    id: "mqtt",
    name: ls("MQTT", "MQTT"),
    blurb: ls(
      "The lightweight publish/subscribe messaging protocol at the core of IoT connectivity.",
      "Giao thức nhắn tin publish/subscribe nhẹ, nền tảng của kết nối IoT."
    ),
    certificates: [
      {
        title: ls("HiveMQ Certified MQTT v3.1.1 Expert", "HiveMQ Certified MQTT v3.1.1 Expert"),
        issuer: "HiveMQ University",
        date: "2026-06-19",
        credentialId: "cdj73cjzg9t9",
        image: "hivemq-mqtt-expert.png",
        file: "/certificates/hivemq-mqtt-expert.pdf",
        verifyUrl: "https://verify.skilljar.com/c/cdj73cjzg9t9",
      },
      {
        title: ls("HiveMQ Certified MQTT v3.1.1 Professional", "HiveMQ Certified MQTT v3.1.1 Professional"),
        issuer: "HiveMQ University",
        date: "2026-06-19",
        credentialId: "f3vtnsw9sb7v",
        image: "hivemq-mqtt-professional.png",
        file: "/certificates/hivemq-mqtt-professional.pdf",
        verifyUrl: "https://verify.skilljar.com/c/f3vtnsw9sb7v",
      },
      {
        title: ls("HiveMQ Certified MQTT Associate", "HiveMQ Certified MQTT Associate"),
        issuer: "HiveMQ University",
        date: "2026-06-14",
        credentialId: "5evxig8jcsna",
        image: "hivemq-mqtt-associate.png",
        file: "/certificates/hivemq-mqtt-associate.pdf",
        verifyUrl: "https://verify.skilljar.com/c/5evxig8jcsna",
      },
    ],
  },
  {
    id: "automation",
    name: ls("Automation", "Tự động hóa"),
    blurb: ls(
      "Industrial automation, PLC programming, and factory automation systems.",
      "Tự động hóa công nghiệp, lập trình PLC và hệ thống tự động hóa nhà máy."
    ),
    certificates: [
      {
        title: ls(
          "Mitsubishi Electric Cup Automation 2024 — Top 20",
          "Mitsubishi Electric Cup Automation 2024 — Top 20"
        ),
        issuer: "Mitsubishi Electric Vietnam",
        date: "2024",
        image: "meca-2024.jpg",
        file: "/certificates/meca-2024.pdf",
      },
    ],
  },
  {
    id: "english",
    name: ls("English", "Tiếng Anh"),
    blurb: ls(
      "English language proficiency for working in international engineering and IoT teams.",
      "Năng lực tiếng Anh để làm việc trong các nhóm kỹ thuật và IoT quốc tế."
    ),
    certificates: [
      {
        title: ls("TOEIC Listening & Reading — 785", "TOEIC Listening & Reading — 785"),
        issuer: "ETS · IIG Vietnam",
        date: "2026-06-12",
        credentialId: "0792020227733",
        image: "toeic-2026.jpg",
        file: "/certificates/toeic-2026.jpg",
      },
    ],
  },
];

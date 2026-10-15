export interface SiteImage {
  readonly src: string;
  readonly alt: string;
}
export interface SiteLink {
  readonly label: string;
  readonly href: string;
}
export interface ContactData {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
}
export type ContactField = keyof ContactData;
export type ContactStatus = "idle" | "sending" | "success" | "error";
export interface ContactMessages {
  readonly success: string;
  readonly demoSuccess: string;
  readonly error: string;
}
export interface ConstructionSite {
  readonly brand: string;
  readonly brandLines: readonly string[];
  readonly tagline: string;
  readonly navigation: readonly SiteLink[];
  readonly action: SiteLink;
  readonly labels: {
    readonly skip: string;
    readonly navigation: string;
    readonly home: string;
  };
  readonly hero: {
    readonly eyebrow: string;
    readonly lines: readonly string[];
    readonly emphasis: string;
    readonly text: string;
    readonly image: SiteImage;
    readonly imageLabel: string;
    readonly secondary: SiteLink;
    readonly note: string;
  };
  readonly strengths: readonly {
    readonly title: string;
    readonly text: string;
  }[];
  readonly expertise: {
    readonly eyebrow: string;
    readonly title: string;
    readonly text: string;
    readonly services: readonly {
      readonly id: string;
      readonly title: string;
      readonly text: string;
      readonly tags: readonly string[];
    }[];
  };
  readonly projects: {
    readonly eyebrow: string;
    readonly title: string;
    readonly text: string;
    readonly notice: string;
    readonly items: readonly {
      readonly title: string;
      readonly category: string;
      readonly image: SiteImage;
    }[];
  };
  readonly process: {
    readonly eyebrow: string;
    readonly title: string;
    readonly steps: readonly {
      readonly title: string;
      readonly text: string;
    }[];
  };
  readonly contact: {
    readonly eyebrow: string;
    readonly title: string;
    readonly text: string;
    readonly region: string;
    readonly note: string;
    readonly endpoint: string | undefined;
    readonly form: {
      readonly nameLabel: string;
      readonly emailLabel: string;
      readonly subjectLabel: string;
      readonly messageLabel: string;
      readonly submit: string;
      readonly sending: string;
      readonly privacyNotice: string;
    } & ContactMessages;
  };
  readonly footer: {
    readonly text: string;
    readonly notice: string;
    readonly copyright: string;
  };
}

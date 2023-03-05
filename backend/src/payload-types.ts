/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    categories: Category;
    media: Media;
    posts: Post;
    pages: Page;
    users: User;
    alerts: Alert;
    tags: Tag;
    forms: Form;
    'form-submissions': FormSubmission;
  };
  globals: {
    mainMenu: MainMenu;
  };
}
export interface Category {
  id: string;
  name?: string;
  archived?: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface Media {
  id: string;
  alt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes: {
    thumbnail: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    hero: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
export interface Post {
  id: string;
  title?: string;
  slug?: string;
  settings: {
    category?: string[] | Category[];
    tags?: string[] | Tag[];
    heroImage?: string | Media;
  };
  layout: (
    | {
        columns: {
          width: 'oneThird' | 'half' | 'twoThirds' | 'full';
          alignment: 'left' | 'center' | 'right';
          richText?: {
            [k: string]: unknown;
          }[];
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        media: string | Media;
        useVimeo?: boolean;
        vimeoID: string;
        aspectRatio?: '56.25' | '75';
        size?: 'normal' | 'wide' | 'fullscreen';
        caption?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'media';
      }
    | {
        alignment: 'contentOnLeft' | 'contentOnRight';
        richText?: {
          [k: string]: unknown;
        }[];
        media: string | Media;
        embeddedVideo: {
          embed?: boolean;
          poster?: string | Media;
          platform?: 'youtube' | 'vimeo';
          videoID: string;
          aspectRatio?: '56.25' | '75';
        };
        links: {
          link: {
            appearance?: 'text' | 'primaryButton' | 'secondaryButton';
            type?: 'reference' | 'custom';
            label: string;
            reference:
              | {
                  value: string | Page;
                  relationTo: 'pages';
                }
              | {
                  value: string | Post;
                  relationTo: 'posts';
                };
            url: string;
            newTab?: boolean;
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'mediaContent';
      }
    | {
        introContent?: {
          [k: string]: unknown;
        }[];
        slides: {
          media: string | Media;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'mediaSlider';
      }
    | {
        filename?: string;
        description?: string;
        language: 'javascript' | 'typescript' | 'html' | 'css' | 'jsx' | 'tsx';
        code: string;
        id?: string;
        blockName?: string;
        blockType: 'code';
      }
  )[];
  author?: string | User;
  publishDate?: string;
  meta: {
    title?: string;
    description?: string;
  };
  _status?: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}
export interface Tag {
  id: string;
  name?: string;
  archived?: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface Page {
  id: string;
  title: string;
  hero: {
    type:
      | 'basic'
      | 'content'
      | 'contentMedia'
      | 'contentSidebar'
      | 'quickNav'
      | 'fullscreenBackground'
      | 'fullscreenSlider';
    basic: {
      richText?: {
        [k: string]: unknown;
      }[];
      links: {
        link: {
          appearance?: 'text' | 'primaryButton' | 'secondaryButton';
          type?: 'reference' | 'custom';
          label: string;
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Post;
                relationTo: 'posts';
              };
          url: string;
          newTab?: boolean;
        };
        id?: string;
      }[];
    };
    content: {
      richText?: {
        [k: string]: unknown;
      }[];
      links: {
        link: {
          appearance?: 'text' | 'primaryButton' | 'secondaryButton';
          type?: 'reference' | 'custom';
          label: string;
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Post;
                relationTo: 'posts';
              };
          url: string;
          newTab?: boolean;
        };
        id?: string;
      }[];
    };
    contentMedia: {
      richText?: {
        [k: string]: unknown;
      }[];
      links: {
        link: {
          appearance?: 'text' | 'primaryButton' | 'secondaryButton';
          type?: 'reference' | 'custom';
          label: string;
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Post;
                relationTo: 'posts';
              };
          url: string;
          newTab?: boolean;
        };
        id?: string;
      }[];
      media?: string | Media;
      embeddedVideo: {
        embed?: boolean;
        poster?: string | Media;
        platform?: 'youtube' | 'vimeo';
        videoID: string;
        aspectRatio?: '56.25' | '75';
      };
    };
    contentSidebar: {
      mainContent?: {
        [k: string]: unknown;
      }[];
      links: {
        link: {
          appearance?: 'text' | 'primaryButton' | 'secondaryButton';
          type?: 'reference' | 'custom';
          label: string;
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Post;
                relationTo: 'posts';
              };
          url: string;
          newTab?: boolean;
        };
        id?: string;
      }[];
      sidebarContent?: {
        [k: string]: unknown;
      }[];
    };
    fullscreenBackground: {
      backgroundMedia: string | Media;
      richText?: {
        [k: string]: unknown;
      }[];
      links: {
        link: {
          appearance?: 'text' | 'primaryButton' | 'secondaryButton';
          type?: 'reference' | 'custom';
          label: string;
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Post;
                relationTo: 'posts';
              };
          url: string;
          newTab?: boolean;
        };
        id?: string;
      }[];
    };
    quickNav: {
      backgroundMedia: string | Media;
      richText?: {
        [k: string]: unknown;
      }[];
      links: {
        link: {
          appearance?: 'text' | 'primaryButton' | 'secondaryButton';
          type?: 'reference' | 'custom';
          label: string;
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Post;
                relationTo: 'posts';
              };
          url: string;
          newTab?: boolean;
        };
        id?: string;
      }[];
      columns: {
        heading: string;
        description: string;
        link: {
          type?: 'reference' | 'custom';
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Post;
                relationTo: 'posts';
              };
          url: string;
          newTab?: boolean;
        };
        id?: string;
      }[];
    };
    fullscreenSlider: {
      useStaticContent?: boolean;
      richText?: {
        [k: string]: unknown;
      }[];
      links: {
        link: {
          appearance?: 'text' | 'primaryButton' | 'secondaryButton';
          type?: 'reference' | 'custom';
          label: string;
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Post;
                relationTo: 'posts';
              };
          url: string;
          newTab?: boolean;
        };
        id?: string;
      }[];
      slides: {
        backgroundMedia: string | Media;
        richText?: {
          [k: string]: unknown;
        }[];
        links: {
          link: {
            appearance?: 'text' | 'primaryButton' | 'secondaryButton';
            type?: 'reference' | 'custom';
            label: string;
            reference:
              | {
                  value: string | Page;
                  relationTo: 'pages';
                }
              | {
                  value: string | Post;
                  relationTo: 'posts';
                };
            url: string;
            newTab?: boolean;
          };
          id?: string;
        }[];
        id?: string;
      }[];
    };
  };
  layout: (
    | {
        appearance?: 'default' | 'condensed';
        sections: {
          label: string;
          openOnInit?: boolean;
          columns: {
            width: 'oneThird' | 'half' | 'twoThirds' | 'full';
            alignment: 'left' | 'center' | 'right';
            richText?: {
              [k: string]: unknown;
            }[];
            links: {
              link: {
                type?: 'reference' | 'custom';
                label: string;
                reference:
                  | {
                      value: string | Page;
                      relationTo: 'pages';
                    }
                  | {
                      value: string | Post;
                      relationTo: 'posts';
                    };
                url: string;
                newTab?: boolean;
              };
              id?: string;
            }[];
            id?: string;
          }[];
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'accordion';
      }
    | {
        columns: {
          width: 'oneThird' | 'half' | 'twoThirds' | 'full';
          alignment: 'left' | 'center' | 'right';
          richText?: {
            [k: string]: unknown;
          }[];
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        richText?: {
          [k: string]: unknown;
        }[];
        form: string | Form;
        id?: string;
        blockName?: string;
        blockType: 'embeddedForm';
      }
    | {
        media: string | Media;
        useVimeo?: boolean;
        vimeoID: string;
        aspectRatio?: '56.25' | '75';
        size?: 'normal' | 'wide' | 'fullscreen';
        caption?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'media';
      }
    | {
        alignment: 'contentOnLeft' | 'contentOnRight';
        richText?: {
          [k: string]: unknown;
        }[];
        media: string | Media;
        embeddedVideo: {
          embed?: boolean;
          poster?: string | Media;
          platform?: 'youtube' | 'vimeo';
          videoID: string;
          aspectRatio?: '56.25' | '75';
        };
        links: {
          link: {
            appearance?: 'text' | 'primaryButton' | 'secondaryButton';
            type?: 'reference' | 'custom';
            label: string;
            reference:
              | {
                  value: string | Page;
                  relationTo: 'pages';
                }
              | {
                  value: string | Post;
                  relationTo: 'posts';
                };
            url: string;
            newTab?: boolean;
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'mediaContent';
      }
    | {
        introContent?: {
          [k: string]: unknown;
        }[];
        slides: {
          media: string | Media;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'mediaSlider';
      }
  )[];
  fullTitle?: string;
  breadcrumbs: {
    doc?: string | Page;
    url?: string;
    label?: string;
    id?: string;
  }[];
  slug?: string;
  parent?: string | Page;
  author?: string | User;
  meta: {
    title?: string;
    description?: string;
  };
  _status?: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}
export interface Form {
  id: string;
  title: string;
  fields: (
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'text';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'textarea';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        options: {
          label: string;
          value: string;
          id?: string;
        }[];
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'select';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'email';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'state';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'country';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        defaultValue?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'checkbox';
      }
    | {
        message?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'message';
      }
  )[];
  submitButtonLabel?: string;
  confirmationType?: 'message' | 'redirect';
  confirmationMessage: {
    [k: string]: unknown;
  }[];
  redirect: {
    type?: 'reference' | 'custom';
    reference:
      | {
          value: string | Page;
          relationTo: 'pages';
        }
      | {
          value: string | Post;
          relationTo: 'posts';
        };
    url: string;
  };
  emails: {
    emailTo?: string;
    cc?: string;
    bcc?: string;
    replyTo?: string;
    emailFrom?: string;
    subject: string;
    message?: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
export interface User {
  id: string;
  name?: string;
  enableAPIKey?: boolean;
  apiKey?: string;
  apiKeyIndex?: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
  password?: string;
}
export interface Alert {
  id: string;
  name?: string;
  placement: 'global' | 'documents';
  documents:
    | {
        value: string;
        relationTo: 'pages';
      }[]
    | {
        value: Page;
        relationTo: 'pages';
      }[];
  backgroundColor?: 'matchTheme' | 'green' | 'blue' | 'red' | 'purple';
  content: {
    [k: string]: unknown;
  }[];
  links: {
    link: {
      appearance?: 'text' | 'primaryButton' | 'secondaryButton';
      type?: 'reference' | 'custom';
      label: string;
      reference:
        | {
            value: string | Page;
            relationTo: 'pages';
          }
        | {
            value: string | Post;
            relationTo: 'posts';
          };
      url: string;
      newTab?: boolean;
    };
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
export interface FormSubmission {
  id: string;
  form: string | Form;
  submissionData: {
    field: string;
    value: string;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
export interface MainMenu {
  id: string;
  items: {
    type?: 'link' | 'subMenu';
    label: string;
    subMenu: {
      blocks: (
        | {
            title: string;
            id?: string;
            blockName?: string;
            blockType: 'menuTitle';
          }
        | {
            appearance?: 'primary' | 'secondary' | 'arrow';
            link: {
              type?: 'reference' | 'custom';
              label: string;
              reference:
                | {
                    value: string | Page;
                    relationTo: 'pages';
                  }
                | {
                    value: string | Post;
                    relationTo: 'posts';
                  };
              url: string;
              newTab?: boolean;
            };
            id?: string;
            blockName?: string;
            blockType: 'menuLink';
          }
        | {
            content: string;
            id?: string;
            blockName?: string;
            blockType: 'menuDescription';
          }
        | {
            media: string | Media;
            headline: string;
            link: {
              type?: 'reference' | 'custom';
              reference:
                | {
                    value: string | Page;
                    relationTo: 'pages';
                  }
                | {
                    value: string | Post;
                    relationTo: 'posts';
                  };
              url: string;
              newTab?: boolean;
            };
            id?: string;
            blockName?: string;
            blockType: 'menuFeature';
          }
      )[];
    };
    link: {
      type?: 'reference' | 'custom';
      reference:
        | {
            value: string | Page;
            relationTo: 'pages';
          }
        | {
            value: string | Post;
            relationTo: 'posts';
          };
      url: string;
      newTab?: boolean;
    };
    id?: string;
  }[];
}

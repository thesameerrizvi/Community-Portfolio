import { Github, Linkedin, Mail, Link as LinkIcon } from "lucide-react";

// Maps the `icon` string in socialLinks to a Lucide icon component.
export const socialIcons = { linkedin: Linkedin, mail: Mail, github: Github };
export const getSocialIcon = (name) => socialIcons[name] || LinkIcon;

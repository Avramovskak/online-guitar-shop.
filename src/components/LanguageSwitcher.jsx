import * as React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [lang, setLang] = React.useState(i18n.language || "en");
  const handle = (_, v) => { if (!v) return; setLang(v); i18n.changeLanguage(v); };
  return (
    <ToggleButtonGroup size="small" value={lang} exclusive onChange={handle} color="secondary">
      <ToggleButton value="en">EN</ToggleButton>
      <ToggleButton value="mk">MK</ToggleButton>
    </ToggleButtonGroup>
  );
}
import { Highlighter, useSiteStore } from 'dumi-theme-antd-style';
import React, { FC } from 'react';

interface SourceCodeProps {
  lang: string;
  children: string;
}

const SourceCode: FC<SourceCodeProps> = ({ children, lang }) => {
  const theme = useSiteStore((s) => s.siteData.themeConfig.syntaxTheme);
  return (
    <Highlighter syntaxThemes={theme} language={lang} type="prism">
      {children}
    </Highlighter>
  );
};

export default SourceCode;

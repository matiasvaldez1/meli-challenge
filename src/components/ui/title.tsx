import React from "react";

interface TitleProps {
  text: string;
  size?: string;
  weight?: string;
  seo?: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  text,
  size = "2rem",
  weight = "bold",
  seo = "h1",
  className = "",
}) => {
  const titleStyle: React.CSSProperties = {
    fontSize: size,
    fontWeight: weight,
  };

  const seoTag = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(
    seo.toLowerCase()
  )
    ? seo.toLowerCase()
    : "h1";

  return (
    <div className={"p-4"}>
      {React.createElement(
        seoTag,
        { style: titleStyle, className: className },
        text
      )}
    </div>
  );
};

export default Title;

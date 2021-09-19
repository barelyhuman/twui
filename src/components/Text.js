import React from "react";

export const Text = ({
  children,
  h1 = false,
  h2 = false,
  h3 = false,
  h4 = false,
  h5 = false,
  h6 = false,
  p = false,
  label = false,
  ...props
}) => {
  return (
    <SelectedTag tagTypes={{ h1, h2, h3, h4, h5, h6, p, label }}>
      {children}
    </SelectedTag>
  );
};

const SelectedTag = ({ tagTypes, children, ...props }) => {
  let ActiveTag = Object.entries(tagTypes).find((tag) => tag[1]);
  if (!ActiveTag) {
    return <p>{children}</p>;
  }
  ActiveTag = ActiveTag[0];
  return <ActiveTag>{children}</ActiveTag>;
};

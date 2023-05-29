import styled from "styled-components";

const AnchorLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:active,
  &:hover {
    color: inherit;
  }
`;

const Link = ({ href, children }) => {
  const handleNavigation = (e) => {
    e.preventDefault();
    const destination = e.currentTarget.getAttribute("href");
    if (!destination) {
      return;
    }
    const destinationSectionId = destination.replace("#", "");
    const section = document.getElementById(destinationSectionId);

    if (!section) {
      return;
    }
    window.location.href = destination;
    section.scrollIntoView();
  };
  return (
    <AnchorLink href={href} onClick={handleNavigation}>
      {children}
    </AnchorLink>
  );
};

export default Link;

import styled from "styled-components";
const menuData = [
  {
    title: "Accueil",
    href: "#section-home",
  },
  {
    title: "A propos",
    href: "#section-about",
  },
  {
    title: "Notre Menu",
    href: "#section-menu",
  },
  {
    title: "Contact",
    href: "#section-contact",
  },
];
type Props = {
  open: boolean;
};
const SiteMenu: React.FC<Props> = ({ open }) => {
  return (
    <Container open={open}>
      <ListUnstyled>
        {menuData.map((item) => {
          return (
            <ListItem key={item.title}>
              <ListItemLink href={item.href}>{item.title}</ListItemLink>
            </ListItem>
          );
        })}
      </ListUnstyled>
    </Container>
  );
};
const Container = styled.div<{ open: boolean }>`
  display: block;
  background: #fff;
  right: 0;
  z-index: 101;
  position: fixed;
  width: 300px;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  transition: 0.3s all ease;
  bottom: 0;
  top: 0;
  box-shadow: 0 -20px 20px -5px rgb(0 0 0 / 5%);
  min-height: 300px;
  overflow: auto;
`;
const ListUnstyled = styled.ul`
  position: relative;
  margin-top: 150px;
  margin-bottom: 50px;
  padding-left: 0;
  list-style: none;
`;
const ListItem = styled.li`
  margin: 0 0 10px 0;
  text-align: center;
`;
const ListItemLink = styled.a`
  color: #000;
  font-size: 20px;
`;
export default SiteMenu;

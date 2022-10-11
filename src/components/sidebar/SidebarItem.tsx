import { Icon } from '../ui';

type SidebarItemProps = {
  iconName: string;
  title: string;
};

export const SidebarItem = ({ iconName, title }: SidebarItemProps) => {
  return (
    <>
      <a href="#" className="sidebar-item ">
        {/* <div className="sidebar-item__icon icon-selected"> */}
        <div className="sidebar-item__icon">
          <Icon name={iconName} size="20" />
        </div>
        {/* <span className="sidebar-item_title title-selected">{title}</span> */}
        <span className="sidebar-item_title">{title}</span>
      </a>
    </>
  );
};

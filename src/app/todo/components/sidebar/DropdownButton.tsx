import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message } from "antd";
type Item = {
  label: string;
  key: string;
  color: string;
};
const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const items: Item[] = [
  {
    label: "1st menu item",
    key: "1",
    color: "#f7c975",
  },
  {
    label: "2nd menu item",
    key: "2",
    color: "#F5972C",
  },
  {
    label: "3rd menu item",
    key: "3",
    color: "#7049F0",
  },
  {
    label: "4rd menu item",
    key: "4",
    color: "#0AA4F6",
  },
  {
    label: "5rd menu item",
    key: "5",
    color: "#C6D947",
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const DropdownButton: React.FC = () => (
  <Dropdown
    menu={menuProps}
    placement="bottom"
    trigger={["click"]}
    dropdownRender={() => {
      return (
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: 0,
            textAlign: "center",
          }}
        >
          {items.map((item: Item) => {
            return (
              <li key={item.key} style={{marginTop: 12}}>
                <Button
                  shape="circle"
                  size="small"
                  type="ghost"
                  style={{ backgroundColor: item.color }}
                />
              </li>
            );
          })}
        </ul>
      );
    }}
  >
    <Button size="large" type="primary" shape="circle" icon={<PlusOutlined />} />
  </Dropdown>
);

export default DropdownButton;

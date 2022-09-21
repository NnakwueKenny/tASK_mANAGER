import React from 'react';
import { BeakerIcon, ChartPieIcon, ViewColumnsIcon, InboxIcon, UserIcon, ShoppingBagIcon, ArrowRightIcon, TableCellsIcon, HiArrowSmRight } from '@heroicons/react/24/solid'

const Sidebar = () => {
  return (
    <div>
        
      <div className="w-fit bg-gray-50">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="#"
              icon={ChartPieIcon}
            >
              Dashboard
            </Sidebar.Item><Sidebar.Item
              href="#"
              icon={ViewColumnsIcon}
              label="Pro"
              labelColor="alternative"
            >
              Kanban
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={InboxIcon}
              label="3"
            >
              Inbox
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={UserIcon}
            >
              Users
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={ShoppingBagIcon}
            >
              Products
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={ArrowRightIcon}
            >
              Sign In
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={TableCellsIcon}
            >
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
    </div>
  )
}

export default Sidebar
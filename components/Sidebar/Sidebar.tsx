
import cn from 'classnames';
import styles from './Sidebar.module.css'
import { SidebarProps } from '@/components/Sidebar/Sidebar.props';
import { Htag } from '@/components';

const Sidebar = async ({className, ...props }: SidebarProps) => {
  return (
    <div {...props} className={cn(className, styles.sidebar)}>
      <Htag tag="h1">ARMAGEDDON 2023</Htag>
      <div>
        <Htag tag="h4">ООО “Команда им. Б. Уиллиса”.</Htag>
        <Htag tag="h4">Взрываем астероиды с 1998 года.</Htag>
      </div>
    </div>
  );
};

export default Sidebar;

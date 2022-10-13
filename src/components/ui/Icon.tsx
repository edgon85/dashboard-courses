import { Book, Box, LogOut, Monitor, SearchIcon } from '../../assets/icons';
import { IconType } from '../../interfaces';

export const Icon = ({ name, ...props }: IconType) => {
  switch (name) {
    case 'book': {
      return <Book {...props} />;
    }
    case 'box': {
      return <Box {...props} />;
    }
    case 'logout': {
      return <LogOut {...props} />;
    }
    case 'monitor': {
      return <Monitor {...props} />;
    }
    case 'search': {
      return <SearchIcon {...props} />;
    }

    default:
      return null;
  }
};

Icon.defaultProps = {
  size: 12,
  color: 'var(--gray)',
};

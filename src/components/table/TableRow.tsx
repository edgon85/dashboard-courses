import image from '../../assets/images/image1.png';
import { TableText, TagStatus } from '../../styled-components';

export const TableRow = () => {
  return (
    <>
      <div className="data-table__row row-selected">
        <span className="text-box-content">
          <input type="checkbox" />
        </span>
        <span className="td-img-title">
          <img src={image} alt="" />
          <TableText>Curso de introducción al desarrollo web</TableText>
        </span>
        <span>
          <TableText>css-grid-layout-interfaces</TableText>
        </span>
        <span>
          <TableText>
            <TagStatus tipo="published">Published</TagStatus>{' '}
          </TableText>
        </span>
        <span>
          <TableText>
            <TagStatus tipo="dollar">50 USD</TagStatus>
          </TableText>
        </span>
        <span>
          <TableText>10 hr</TableText>
        </span>
      </div>
    </>
  );
};

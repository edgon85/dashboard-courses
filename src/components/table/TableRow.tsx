import { useState } from 'react';
import image from '../../assets/images/image1.png';
import { useCourse, useForm } from '../../hooks';
import { Course } from '../../interfaces';
import { TableText, TagStatus } from '../../styled-components';

type TableRowProps = {
  course: Course;
  isSelected: boolean;
};

export const TableRow = ({ course, isSelected }: TableRowProps) => {
  const { selectCourse } = useCourse(isSelected);

  return (
    <>
      <div className={`data-table__row ${isSelected ? 'row-selected' : ''} `}>
        <span className="text-box-content">
          <input
            type="checkbox"
            name="isSlected"
            value={course.id}
            onChange={selectCourse}
            checked={isSelected}
          />
        </span>
        <span className="td-img-title">
          <img src={image} alt="" />
          <TableText>{course.name}</TableText>
        </span>
        <span>
          <TableText>{course.slug}</TableText>
        </span>
        <span>
          <TableText>
            <TagStatus tipo={course.status}>{course.status}</TagStatus>
          </TableText>
        </span>
        <span>
          <TableText>
            <TagStatus tipo="dollar">
              {course.price}
              <span style={{ textTransform: 'uppercase' }}>
                {course.currencyCode}
              </span>
            </TagStatus>
          </TableText>
        </span>
        <span>
          <TableText>{course.hours} hr</TableText>
        </span>
      </div>
    </>
  );
};

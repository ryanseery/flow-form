import * as React from 'react';
import { IItem } from './Item';
import { toCamelCase } from '../utils';

export function handleBlankArr(children: React.ReactNode[]): {} {
  return React.Children.toArray(children).reduce(
    (acc: {}, child) =>
      React.isValidElement<IItem>(child)
        ? { ...acc, [toCamelCase(child.props.name ? child.props.name : child.props.children ?? '')]: '' }
        : acc,
    {},
  );
}

export function handleBlankObj(children: React.ReactNode): {} {
  if (React.isValidElement<IItem>(children)) {
    return { [toCamelCase(children.props.name ? children.props.name : children.props.children ?? '')]: '' };
  } else {
    return {};
  }
}

export function handleInputPropsArr(children: React.ReactNode[]): {} {
  return React.Children.toArray(children).reduce(
    (acc: [], child) => (React.isValidElement<IItem>(child) ? [...acc, { ...child.props }] : acc),
    [],
  );
}

export function handleInputPropsObj(children: React.ReactNode): {} {
  if (React.isValidElement<IItem>(children)) {
    return [{ ...children.props }];
  }
  return [];
}

export function handleErrorArr(children: React.ReactNode[]): {} {
  return React.Children.toArray(children).reduce(
    (acc: {}, child) =>
      React.isValidElement<IItem>(child)
        ? {
            ...acc,
            [toCamelCase(child.props.name ? child.props.name : child.props.children ?? '')]:
              child.props?.required || child.props?.validation ? true : false ?? false,
          }
        : acc,
    {},
  );
}

export function handleErrorObj(children: React.ReactNode): {} {
  if (React.isValidElement<IItem>(children)) {
    return {
      [toCamelCase(children.props.name ? children.props.name : children.props.children ?? '')]:
        children.props?.required || children.props?.validation ? true : false ?? false,
    };
  } else {
    return {};
  }
}

export function handleFocusArr(children: React.ReactNode[]): {} {
  return React.Children.toArray(children).reduce(
    (acc: {}, child) =>
      React.isValidElement<IItem>(child)
        ? { ...acc, [toCamelCase(child.props.name ? child.props.name : child.props.children ?? '')]: false }
        : acc,
    {},
  );
}

export function handleFocusObj(children: React.ReactNode): {} {
  if (React.isValidElement<IItem>(children)) {
    return {
      [toCamelCase(children.props.name ? children.props.name : children.props.children ?? '')]: false,
    };
  } else {
    return {};
  }
}

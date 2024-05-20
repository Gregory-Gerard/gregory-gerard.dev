import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

export default function Section(
  props: PropsWithChildren<ComponentPropsWithoutRef<'section'>>,
) {
  const { children, className, title, ...rest } = props;

  return (
    <section className={`flex flex-col gap-8 mb-16 ${className}`} {...rest}>
      {title && (
        <h2 className="flex items-center gap-2 text-lg font-medium text-zinc-100">
          {title}
        </h2>
      )}

      {children}
    </section>
  );
}

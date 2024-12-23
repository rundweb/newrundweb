/* eslint-disable react/prop-types */

function NavbarComponents({ name, link }) {
  return (
    <div className="font-semibold text-emerald-800 text-lg md:text-base">
      <a href={link} className="hover:text-emerald-600 ease-in-out duration-500">{name}</a>
    </div>
  );
}

export default NavbarComponents;

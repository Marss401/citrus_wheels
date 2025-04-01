export default function Footer() {
  return (
    <footer className="pt-20 pb-10">
      <small className="pt-5 border-t border-secondary opacity-50 justify-center flex text-xs">
        &copy;{new Date().getFullYear()}&nbsp;CitrusWheels&nbsp;.All&nbsp;rights&nbsp;reserved
      </small>
    </footer>
  );
}

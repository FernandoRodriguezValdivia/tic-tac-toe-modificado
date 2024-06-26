export const Circle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 32 32"
    {...props}
  >
    <title>{"circle"}</title>
    <path d="M0 16q0 3.264 1.28 6.208t3.392 5.12 5.12 3.424T16 32t6.208-1.248 5.12-3.424 3.392-5.12T32 16t-1.28-6.208-3.392-5.12T22.24 1.28 16 0q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12T0 16zm4 0q0-3.264 1.6-6.016t4.384-4.352T16 4t6.016 1.632T26.4 9.984 28 16t-1.6 6.048-4.384 4.352T16 28t-6.016-1.6T5.6 22.048 4 16z" />
  </svg>
)
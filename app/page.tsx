export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        color: "#222",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          backgroundColor: "#0d1b2a",
          color: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
          Cut & Edge Bethlehem
        </h1>

        <p style={{ fontSize: "1.2rem" }}>
          Precision Cutting, Edging & Custom Furniture Manufacturing
        </p>

        <a
          href="https://wa.me/27823090479"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 25px",
            backgroundColor: "#25D366",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
          }}
        >
          WhatsApp Us
        </a>
      </section>

      <section style={{ padding: "40px 20px" }}>
        <h2>Our Services</h2>

        <ul>
          <li>Board Cutting</li>
          <li>Edge Banding</li>
          <li>Custom Cabinets</li>
          <li>Built-in Cupboards</li>
          <li>Kitchen Manufacturing</li>
          <li>Furniture Manufacturing</li>
        </ul>
      </section>

      <section
        style={{
          backgroundColor: "white",
          padding: "40px 20px",
        }}
      >
        <h2>Why Choose Us?</h2>

        <p>
          We provide professional cutting, edging and furniture manufacturing
          services from Bethlehem, Free State. Serving homeowners, builders,
          contractors and cabinet makers across South Africa.
        </p>
      </section>

      <section
        style={{
          backgroundColor: "#e9ecef",
          padding: "40px 20px",
        }}
      >
        <h2>Contact Us</h2>

        <p>
          <strong>Phone / WhatsApp:</strong> 082 309 0479
        </p>

        <p>
          <strong>Email:</strong> k.visagie02@gmail.com
        </p>

        <p>
          <strong>Address:</strong> 16 Pretorius Street, Bethlehem, South Africa
        </p>
      </section>
    </main>
  );
}

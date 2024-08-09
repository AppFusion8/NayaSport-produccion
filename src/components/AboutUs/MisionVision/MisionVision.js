import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";
import GetData from "../../../services/GetFAQS";
import misionVision from "../../../Json/MisionVision.json";

function MisionVision() {
  const { data, loading, error } = GetData("../../../Json/MisionVision.json");

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom
      sx={{
        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }, 
        paddingX: { xs: '1rem', sm: '2rem', md: '3rem' }
      }}
      >
      Conoce más sobre nuestra misión y visión.
      </Typography>
      {misionVision.map((info, i) => {
        return (
          <Accordion key={i}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>{info.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{info.text}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
      <br>
      </br>
      
    </div>
  );
}

export default MisionVision;

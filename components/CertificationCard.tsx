import React from "react";
import { Card, CardBody, Badge, Button } from "reactstrap";
import { CertificationType } from "../types/sections";
import Fade from "react-reveal/Fade";

const CertificationCard = ({
  name,
  issuer,
  issued,
  expires,
  validationNumber,
  verifyLink,
  certificateLink,
}: CertificationType) => {
  return (
    <Fade right duration={2000}>
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-info">{name}</h5>
              <h6>{issuer}</h6>
              <Badge color="info" className="mr-1">
                Issued {issued}
              </Badge>
              {expires && (
                <Badge color="primary" className="mr-1">
                  Expires {expires}
                </Badge>
              )}
              {validationNumber && (
                <p className="description mt-3 mb-0">
                  Validation number: <code>{validationNumber}</code>
                </p>
              )}
              <div className="mt-3">
                {certificateLink && (
                  <Button
                    className="btn-icon mb-2 mr-2"
                    color="info"
                    size="sm"
                    href={certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="btn-inner--icon mr-1">
                      <i className="fa fa-certificate" />
                    </span>
                    <span className="btn-inner--text">View Certificate</span>
                  </Button>
                )}
                {verifyLink && (
                  <Button
                    className="btn-icon mb-2"
                    color="default"
                    outline
                    size="sm"
                    href={verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="btn-inner--icon mr-1">
                      <i className="fa fa-check-circle" />
                    </span>
                    <span className="btn-inner--text">Verify</span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default CertificationCard;

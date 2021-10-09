
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { hot } from 'react-hot-loader/root';
import dateFormat from 'dateformat';
import { MdUpdate, MdDeleteForever } from "react-icons/md";
import { GiWhiteBook, GiBookshelf, GiSave } from "react-icons/gi";
import { AiOutlineClear, AiFillCloseSquare } from "react-icons/ai";
import { Container, Row, Col, Card, Button, Form, Table, Tooltip, OverlayTrigger, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  //insert book details variable
  const [txt_bookid, setbookid] = useState("");
  const [txt_isbnno, setisbnno] = useState("");
  const [txt_booktitle, setbooktitle] = useState("");
  const [txt_author, setauthor] = useState("");
  const [txt_publishdate, setpublishdate] = useState("");
  const [txt_addingdate, setaddingdate] = useState("");
  const [txt_pages, setpages] = useState("");
  const [txt_price, setprice] = useState("");
  const [txt_source, setsource] = useState("");
  const [txt_remarks, setremarks] = useState("");
  //update book details variable
  const [txt_updateisbnno, setupdateisbnno] = useState("");
  const [txt_updatebooktitle, setupdatebooktitle] = useState("");
  const [txt_updateauthor, setupdateauthor] = useState("");
  const [txt_updatepublishdate, setupdatepublishdate] = useState("");
  const [txt_updateaddingdate, setupdateaddingdate] = useState("");
  const [txt_updatepages, setupdatepages] = useState("");
  const [txt_updateprice, setupdateprice] = useState("");
  const [txt_updatesource, setupdatesource] = useState("");
  const [txt_updateremarks, setupdateremarks] = useState("");
  //view bokk details list
  const [bookList, setBookList] = useState([]);
  //update button tooltip
  const UpdateBTNTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Update
    </Tooltip>
  );

  //delete button tooltip
  const DeleteBTNTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Delete
    </Tooltip>
  );

  //setbooklist function
  useEffect(() => {
    Axios.get("https://spm-library-management-system.herokuapp.com/api/get").then((response) => {
      setBookList(response.data);
    });
  }, []);

  //insert book details function
  const submitBook = () => {
    Axios.post("https://spm-library-management-system.herokuapp.com/api/insert", {
      bookid: txt_bookid,
      isbnno: txt_isbnno,
      booktitle: txt_booktitle,
      author: txt_author,
      publishdate: txt_publishdate,
      addingdate: txt_addingdate,
      pages: txt_pages,
      price: txt_price,
      source: txt_source,
      remarks: txt_remarks
    });
    alert("Successfully Inserted..!");
    window.location.reload(true);
  };

  //delete book details function
  const deleteBook = (deletebookid) => {
    Axios.delete(`https://spm-library-management-system.herokuapp.com/api/delete/${deletebookid}`);
    alert("Successfully Deleted..!");
    window.location.reload(true);
  };

  //update book details function
  const updateBook = (Pupdatebookid, Pupdateisbnno,Pupdatebooktitle,Pupdateauthor,Pupdatepublishdate,Pupdateaddingdate,Pupdatepages,Pupdateprice,Pupdatesource,Pupdateremarks) => {
    Axios.put("https://spm-library-management-system.herokuapp.com/api/update", {
      updatebookid: Pupdatebookid,
      updateisbnno: (txt_updateisbnno ? txt_updateisbnno : Pupdateisbnno),
      updatebooktitle: (txt_updatebooktitle ? txt_updatebooktitle : Pupdatebooktitle),
      updateauthor: (txt_updateauthor ? txt_updateauthor : Pupdateauthor),
      updatepublishdate: (txt_updatepublishdate ? txt_updatepublishdate: Pupdatepublishdate),
      updateaddingdate: (txt_updateaddingdate ? txt_updateaddingdate : Pupdateaddingdate),
      updatepages: (txt_updatepages ? txt_updatepages : Pupdatepages),
      updateprice: (txt_updateprice ? txt_updateprice : Pupdateprice),
      updatesource: (txt_updatesource ? txt_updatesource : Pupdatesource),
      updateremarks: (txt_updateremarks ? txt_updateremarks : Pupdateremarks)
    });
    alert("Successfully updated..!");
    window.location.reload(true);
  };

  //Modal showing function
  const [show, setShow] = useState(false);
  //modal setinput data list
  const [InputList, setInput] = useState([]);
  //modal hide function
  const handleClose = () => setShow(false);
  //modal input set and show function
  const handleShow = (
    inputBID,
    inputISBN,
    inputBookTitle,
    inputAuthor,
    inputPublishDate,
    inputAddingDate,
    inputPages,
    inputPrice,
    inputSource,
    inputRemarks
  ) => {
    setShow(true);
    setInput({
      inputBID,
      inputISBN,
      inputBookTitle,
      inputAuthor,
      inputPublishDate,
      inputAddingDate,
      inputPages,
      inputPrice,
      inputSource,
      inputRemarks
    });
  };

  return (
    <Container fluid className="Body">
      <Row>
        <Col className="text_align_center top_padding_1"><h1><GiBookshelf size="60px" />Library Management System..</h1></Col>
      </Row>
      <Row>
        <Col lg="8" className="top_padding_1 bottom_padding_1 align_center">
          <Card style={{ width: '100%', padding: '15px' }}>
            <Form>
              <Card.Body>
                <Card.Title className="text_align_center">Add New Books In Library</Card.Title>
                <hr></hr>
                <Card.Text>
                  <Row>
                    <Col>
                      <Form.Group controlId="bookid">
                        <Form.Label>Book ID :</Form.Label>
                        <Form.Control type="number" name="txt_bookid" data-testid="txt_bookid" placeholder="Enter Book ID"
                          onChange={(e) => {
                            setbookid(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="isbnno">
                        <Form.Label>ISBN NO :</Form.Label>
                        <Form.Control type="text" name="txt_isbnno" data-testid="txt_isbnno" placeholder="Enter ISBN NO"
                          onChange={(e) => {
                            setisbnno(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="booktitle">
                        <Form.Label>Book Title :</Form.Label>
                        <Form.Control type="text" name="txt_booktitle" placeholder="Enter Book Title"
                          onChange={(e) => {
                            setbooktitle(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="author">
                        <Form.Label>Author :</Form.Label>
                        <Form.Control type="text" name="txt_author" placeholder="Enter Author"
                          onChange={(e) => {
                            setauthor(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="publishdate">
                        <Form.Label>Publish Date :</Form.Label>
                        <Form.Control type="date" name="txt_publishdate" data-testid="txt_publishdate" placeholder="Enter Publish Date"
                          onChange={(e) => {
                            setpublishdate(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="addingdate">
                        <Form.Label>Adding Date :</Form.Label>
                        <Form.Control type="date" name="txt_addingdate" placeholder="Enter Adding Date"
                          onChange={(e) => {
                            setaddingdate(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="pages">
                        <Form.Label>Pages :</Form.Label>
                        <Form.Control type="text" name="txt_pages" placeholder="Enter Pages"
                          onChange={(e) => {
                            setpages(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="price">
                        <Form.Label>Price :</Form.Label>
                        <Form.Control type="text" name="txt_price" placeholder="Enter Price"
                          onChange={(e) => {
                            setprice(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="source">
                        <Form.Label>Source :</Form.Label>
                        <Form.Control as="textarea" name="txt_source" rows={3} placeholder="Enter Source"
                          onChange={(e) => {
                            setsource(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="remark">
                        <Form.Label>Remark :</Form.Label>
                        <Form.Control as="textarea" name="txt_remarks" rows={3} placeholder="Enter Remark"
                          onChange={(e) => {
                            setremarks(e.target.value)
                          }}>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Text>
                <div className="buttom_align_right">
                  <Button type="reset" variant="danger" name="btn_reset" className="button_style"><AiOutlineClear /> Clear</Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button variant="primary" name="btn_save" className="button_style"
                    onClick={submitBook}
                  ><GiSave /> Save Book</Button>
                </div>

                <br />
                <Card.Title className="text_align_center">Books Details</Card.Title>
                <hr></hr>

                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>ISBN NO</th>
                      <th>Book Title</th>
                      <th>Author</th>
                      <th>Publish Date</th>
                      <th>Adding Date</th>
                      <th>Pages</th>
                      <th>Price</th>
                      <th>Source</th>
                      <th>Remarks</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  {bookList.map((val) => {
                    return (
                      <tbody>
                        <tr>
                          <td>{val.Book_ID}</td>
                          <td>{val.ISBN_NO}</td>
                          <td>{val.Book_Title}</td>
                          <td>{val.Author}</td>
                          <td>{dateFormat(val.Publish_Date, "mm/dd/yyyy")}</td>
                          <td>{dateFormat(val.Adding_Date, "mm/dd/yyyy")}</td>
                          <td>{val.Pages}</td>
                          <td>Rs.{val.Price}</td>
                          <td>{val.Source}</td>
                          <td>{val.Remarks}</td>
                          <td>
                            <OverlayTrigger
                              placement="right"
                              delay={{ show: 250, hide: 400 }}
                              overlay={DeleteBTNTooltip}
                            >
                              <Button variant="danger" onClick={() => { deleteBook(val.Book_ID) }}><MdDeleteForever /></Button>
                            </OverlayTrigger>
                            &nbsp;
                            <OverlayTrigger
                              placement="right"
                              delay={{ show: 250, hide: 400 }}
                              overlay={UpdateBTNTooltip}
                            >
                              <Button variant="success"
                                onClick={() => {
                                  handleShow(
                                    val.Book_ID,
                                    val.ISBN_NO,
                                    val.Book_Title,
                                    val.Author,
                                    val.Publish_Date,
                                    val.Adding_Date,
                                    val.Pages,
                                    val.Price,
                                    val.Source,
                                    val.Remarks
                                  )
                                }}>
                                <MdUpdate /></Button>
                            </OverlayTrigger>

                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </Table>
              </Card.Body>
            </Form>
          </Card>
          {/* Modal For Update Books */}
          <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header >{/*closeButton*/}
              <Modal.Title><GiWhiteBook size="45px" /> Update Book Name : {InputList.inputBookTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Group controlId="bookid">
                      <Form.Label>*Book ID :</Form.Label>
                      <Form.Control type="text" name="txt_updatebookid" value={InputList.inputBID} disabled>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="isbnno">
                      <Form.Label>ISBN NO :</Form.Label>
                      <Form.Control type="text" name="txt_updateisbnno" defaultValue={InputList.inputISBN}
                        onChange={(e) => {
                          setupdateisbnno(e.target.value)
                        }}>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="booktitle">
                      <Form.Label>Book Title :</Form.Label>
                      <Form.Control type="text" name="txt_updatebooktitle" defaultValue={InputList.inputBookTitle}
                        onChange={(e) => {
                          setupdatebooktitle(e.target.value)
                        }}>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="author">
                      <Form.Label>Author :</Form.Label>
                      <Form.Control type="text" name="txt_updateauthor" defaultValue={InputList.inputAuthor}
                        onChange={(e) => {
                          setupdateauthor(e.target.value)
                        }}>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="publishdate">
                      <Form.Label>Publish Date :</Form.Label>
                      <Form.Control type="date" name="txt_updatepublishdate" defaultValue={dateFormat(InputList.inputPublishDate, "yyyy-mm-dd")}
                        onChange={(e) => {
                          setupdatepublishdate(e.target.value)
                        }}>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="addingdate">
                      <Form.Label>Adding Date :</Form.Label>
                      <Form.Control type="date" name="txt_updateaddingdate" defaultValue={dateFormat(InputList.inputAddingDate, "yyyy-mm-dd")}
                        onChange={(e) => {
                          setupdateaddingdate(e.target.value)
                        }}>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="pages">
                      <Form.Label>Pages :</Form.Label>
                      <Form.Control type="text" name="txt_updatepages" defaultValue={InputList.inputPages}
                        onChange={(e) => {
                          setupdatepages(e.target.value)
                        }}>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="price">
                      <Form.Label>Price :</Form.Label>
                      <Form.Control type="text" name="txt_updateprice" defaultValue={InputList.inputPrice}
                        onChange={(e) => {
                          setupdateprice(e.target.value)
                        }}>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="source">
                      <Form.Label>Source :</Form.Label>
                      <Form.Control as="textarea" name="txt_updatesource" rows={3} defaultValue={InputList.inputSource}
                        onChange={(e) => {
                          setupdatesource(e.target.value)
                        }}>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="remark">
                      <Form.Label>Remark :</Form.Label>
                      <Form.Control as="textarea" name="txt_updateremarks" rows={3} defaultValue={InputList.inputRemarks}
                        onChange={(e) => {
                          setupdateremarks(e.target.value)
                        }}>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
            <Modal.Footer className="button_center">
              <Button variant="danger" className="button_style" onClick={handleClose}>
                <AiFillCloseSquare /> Close
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant="primary" className="button_style"
                onClick={() => {
                  updateBook(
                    InputList.inputBID,
                    InputList.inputISBN,
                    InputList.inputBookTitle,
                    InputList.inputAuthor,
                    InputList.inputPublishDate,
                    InputList.inputAddingDate,
                    InputList.inputPages,
                    InputList.inputPrice,
                    InputList.inputSource,
                    InputList.inputRemarks
                  )
                }}>
                <GiSave /> Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>

  );

}

export default hot(App);

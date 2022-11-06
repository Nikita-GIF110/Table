import { useState } from 'react'
import PropTypes from 'prop-types'
import _class from 'classnames'
import {
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
} from 'reactstrap'
import { createPages } from '../helpers'

import styles from './TablePagination.module.scss'

export const TablePagination = ({ pagination, callback, sizePagesList }) => {
  const {
    page,
    per_page,
    pages,
  } = pagination
  const [viewCount, setViewCount] = useState(50)

  const totalText = `${page} - ${per_page} из ${pages}`
  const pageList = createPages(page, pages)

  const conditionPrevAction = page > 1

  const onChangeSizePage = (event) => {
    const size = parseInt(event.target.value, 10)
    setViewCount(size)
    if (typeof callback === 'function') {
      callback({ page: size })
    }
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.total}>{totalText}</div>
      <Row className="gx-0 align-items-center">
        <Col>
          <Pagination size="sm" listClassName="mb-0">
            <PaginationItem className={styles.item} disabled={!conditionPrevAction}>
              <PaginationLink first href="#" className={styles.action} title="В Начало" aria-label="В Начало">
                <i className="bx bx-chevrons-left" />
              </PaginationLink>
            </PaginationItem>

            <PaginationItem className={styles.item} disabled={!conditionPrevAction}>
              <PaginationLink previous href="#" className={`${styles.action} ${styles.hover}`} title="Предыдущая страница" aria-label="Предыдущая страница">
                <i className="bx bx-dots-horizontal-rounded" />
                <i className="bx bx-chevron-left" />
              </PaginationLink>
            </PaginationItem>

            {pageList.map((value) => (
              <PaginationItem className={styles.item} key={value}>
                <PaginationLink href="#" className={_class(styles.action, { [styles.active]: page === value })}>
                  {value}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem className={styles.item}>
              <PaginationLink next href="#" className={`${styles.action} ${styles.hover}`} title="Следующаяя страница" aria-label="Следующаяя страница">
                <i className="bx bx-dots-horizontal-rounded" />
                <i className="bx bx-chevron-right" />
              </PaginationLink>
            </PaginationItem>

            <PaginationItem className={styles.item}>
              <PaginationLink last href="#" className={styles.action} title="Последняя страница" aria-label="Последняя страница">
                <i className="bx bx-chevrons-right" />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </Col>
        <Col className="text-end">
          {sizePagesList.map((count) => (
            <span key={count} className={styles.item}>
              <Button
                size="sm"
                className={_class(styles.action, { [styles.active]: count === viewCount })}
                onClick={onChangeSizePage}
                value={count}
              >
                {count}
              </Button>
            </span>
          ))}
        </Col>
      </Row>
    </div>
  )
}
TablePagination.propTypes = {
  callback: PropTypes.func,
  pagination: PropTypes.object,
  sizePagesList: PropTypes.array,
}
TablePagination.defaultProps = {
  callback: null,
  pagination: { },
  sizePagesList: [],
}

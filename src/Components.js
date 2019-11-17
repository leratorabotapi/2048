import React, { PureComponent } from 'react'
import Layout from 'UI/Layout'
import Field from 'UI/Field'

class Components extends PureComponent {
  render() {
    return (
      <Layout>
        {/* code for prettier-ignore */}
        <Field cells={[
                        {id:  0, y: 0, x: 0, value:     2},
                        {id:  1, y: 0, x: 1, value:     4},
                        {id:  2, y: 0, x: 2, value:     8},
                        {id:  3, y: 0, x: 3, value:    16},
                        {id:  4, y: 1, x: 0, value:    32},
                        {id:  5, y: 1, x: 1, value:    64},
                        {id:  6, y: 1, x: 2, value:   128},
                        {id:  7, y: 1, x: 3, value:   256}, // This is like intermediate level
                        {id:  8, y: 2, x: 0, value:   512},
                        {id:  9, y: 2, x: 1, value:  1024},
                        {id: 10, y: 2, x: 2, value:  2048}, // I can barely get here myself 
                        {id: 11, y: 2, x: 3, value:  4096}, // BUFFER!!!!!!
                      ]} />
      </Layout>
    )
  }
}

export default Components

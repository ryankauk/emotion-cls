import { css } from '@emotion/react'

import styled from '@emotion/styled'
export const Heading = styled.h2(
  ({}) => css`
    font-size: 19px;
  `,
)
export default function CatchAll() {
  return (
    <div
      css={[
        css`
          & > * {
            background: purple;
            height: 200px;
            width: 100%;
          }
          & > * + * {
            margin-top: 70px;
          }
        `,
      ]}
    >
      <section
        css={css`
          position: relative;
        `}
      >
       <Heading>Lorem ipsum dolor sit amet, consectetur</Heading>
      </section>

      <section
        css={css`
          position: relative;
        `}
      >
        <h1>{'Lorem ipsum dolor sit amet, consectetur'}</h1>
        <p>
          {
            'In non vestibulum ex. Nunc feugiat sodales diam ac laoreet. Maecenas vitae pulvinar dui, quis vehicula leo. In pellentesque cursus enim eget fringilla'
          }
        </p>
      </section>
    </div>
  )
}

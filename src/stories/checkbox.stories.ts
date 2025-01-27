import { moduleMetadata, Meta, StoryFn } from '@storybook/angular';
import { MatCheckboxModule } from '@angular/material/checkbox';

export default {
  title: 'Example/Checkbox',
  decorators: [
    moduleMetadata({
      imports: [MatCheckboxModule],
    }),
  ],
} as Meta;

const Template: StoryFn = (args) => ({
  props: args,
  template: `<mat-checkbox>{{label}}</mat-checkbox>`,
});

export const Default = Template.bind({});
Default.args = {
  label: 'I agree',
};

export default function() {
  this.transition(
    this.fromRoute('profiles'),
    this.toRoute('profiles.profile'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('profiles'),
    this.toRoute('customise'),
    this.use('toDown'),
    this.reverse('toUp')
  );
}
